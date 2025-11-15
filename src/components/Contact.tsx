import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Users, Phone } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('c1');
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Refs for Calendly container elements
  const widgetContainers = useRef<Record<string, HTMLDivElement | null>>({
    c1: null,
    c2: null,
    c3: null,
  });

  // Track which tabs we've initialized already (avoid re-inits)
  const initializedTabs = useRef<Set<string>>(new Set());

  // Tabs config
  const tabs = [
    {
      id: 'c1',
      title: 'Intro Call — 15 min',
      icon: Phone,
      description:
        'Quick discovery to understand goals around carbon credits, sustainability or climate tech.',
      location: 'Google Meet',
      url: 'https://calendly.com/agricarbonx/30min?hide_event_type_details=1&hide_gdpr_banner=1',
    },
    {
      id: 'c2',
      title: 'Carbon Consultation — 30 min',
      icon: Clock,
      description: 'In-depth discussion on project strategy, carbon accounting and market access.',
      location: 'Google Meet',
      url: 'https://calendly.com/agricarbonx/carbon-credit-strategy-consultation?hide_event_type_details=1&hide_gdpr_banner=1',
    },
    {
      id: 'c3',
      title: 'Partnership — 45 min',
      icon: Users,
      description: 'Partnership exploration and integration discussions.',
      location: 'Google Meet',
      url: 'https://calendly.com/agricarbonx/strategic-partnership-discussion?hide_event_type_details=1&hide_gdpr_banner=1',
    },
  ];

  // Intersection observer to mark section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  // Helper: load Calendly script once, return a promise that resolves when ready
  function loadCalendlyScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // If Calendly already present on window, resolve immediately
      if (typeof window !== 'undefined' && window.Calendly) {
        resolve();
        return;
      }

      // If script already in DOM but Calendly not ready yet, attach load handlers
      const existing = document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`);
      if (existing) {
        // If script has already loaded, try to resolve quickly
        if ((existing as HTMLScriptElement).getAttribute('data-loaded') === 'true') {
          resolve();
        } else {
          existing.addEventListener('load', () => resolve());
          existing.addEventListener('error', () => reject(new Error('Calendly script failed to load')));
        }
        return;
      }

      // Otherwise create the script tag
      const script = document.createElement('script');
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        script.setAttribute('data-loaded', 'true');
        resolve();
      };
      script.onerror = () => reject(new Error('Calendly script failed to load'));

      document.body.appendChild(script);
    });
  }

  // Initialize Calendly widget into the provided container for a tab
  async function initCalendlyForTab(tabId: string) {
    // Guard
    if (!isVisible) return; // only initialize when section is visible
    if (initializedTabs.current.has(tabId)) return; // already initialized

    const tab = tabs.find((t) => t.id === tabId);
    if (!tab) return;

    const container = widgetContainers.current[tabId];
    if (!container) return;

    try {
      await loadCalendlyScript();

      // Defensive cleanup: remove any children (placeholder) before init
      container.innerHTML = '';

      // Use Calendly's initInlineWidget to mount the widget
      if (window.Calendly && typeof window.Calendly.initInlineWidget === 'function') {
        window.Calendly.initInlineWidget({
          url: tab.url,
          parentElement: container,
        });

        initializedTabs.current.add(tabId);
      } else {
        // If Calendly API not present after load, print a console warning
        // (script may have different load timing in some environments)
        console.warn('Calendly API not available after script load.');
      }
    } catch (err) {
      // Fail silently in UI but log for debugging
      console.error('Failed to load Calendly widget:', err);
    }
  }

  // Effect: initialize widget when the section is visible and activeTab is set
  useEffect(() => {
    if (!isVisible) return;

    // Initialize the active tab's Calendly widget (if not already)
    initCalendlyForTab(activeTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, activeTab]);

  // If you want to proactively init the first tab once visible:
  useEffect(() => {
    if (isVisible) {
      initCalendlyForTab(activeTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-dark-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-violet/5 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-neon" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-neon uppercase tracking-wider">Book a Call</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-black text-light mb-6 tracking-tight">
            Book an Intro or <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto font-light">
            Select an event below to schedule a discovery, technical consultation or partnership discussion.
          </p>
        </div>

        <div className="glass-strong p-8 rounded-3xl border-2 border-neon/20 max-w-6xl mx-auto">
          <div
            className="flex flex-col md:flex-row gap-4 mb-8"
            role="tablist"
            aria-label="Booking options"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 p-6 rounded-2xl text-left transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-neon/10 border-2 border-neon shadow-lg'
                      : 'glass-card border-2 border-transparent hover:border-neon/30'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`p-3 rounded-xl ${activeTab === tab.id ? 'bg-neon/20' : 'bg-neon/10'}`}
                      aria-hidden
                    >
                      <Icon className="w-6 h-6 text-neon" strokeWidth={2} />
                    </div>
                    <h3
                      className={`font-heading font-bold ${
                        activeTab === tab.id ? 'text-neon' : 'text-light'
                      }`}
                    >
                      {tab.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                role="tabpanel"
                aria-hidden={activeTab !== tab.id}
                className={activeTab === tab.id ? 'block' : 'hidden'}
              >
                <div className="mb-6">
                  <p className="text-light/80 mb-2">{tab.description}</p>
                  <p className="text-sm text-light/60">Location: {tab.location}</p>
                </div>

                <div className="bg-dark-deep/50 rounded-xl p-8 text-center border border-neon/10">
                  <Calendar className="w-16 h-16 text-neon mx-auto mb-4 icon-glow-neon" strokeWidth={1.5} />
                  <p className="text-light/70 mb-4">Calendly integration</p>
                  <p className="text-sm text-light/50 mb-4">
                    The booking widget appears below once loaded.
                  </p>

                  {/* Calendly container: Calendly will inject an iframe inside this div */}
                  <div
                    ref={(el) => {
                      widgetContainers.current[tab.id] = el;
                    }}
                    className="calendly-widget-container w-full"
                    style={{ minHeight: '700px' }}
                    aria-live="polite"
                    aria-label={`${tab.title} booking`}
                  >
                    {/* In dev / local we show the url as placeholder if not initialized */}
                    {!initializedTabs.current.has(tab.id) && (
                      <div className="text-xs text-light/40 font-mono break-all p-4">
                        {isVisible ? 'Loading booking widget...' : tab.url}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <p className="text-sm text-light/70 text-center">
              <span className="text-neon font-semibold">Note:</span> All meetings are conducted via Google Meet. You'll receive a calendar invitation with the meeting link upon booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

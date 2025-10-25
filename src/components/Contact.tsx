import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Users, Phone } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('c1');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tabs = [
    {
      id: 'c1',
      title: 'Intro Call — 15 min',
      icon: Phone,
      description: 'Quick discovery to understand goals around carbon credits, sustainability or climate tech.',
      location: 'Google Meet',
      url: 'https://calendly.com/agricarbonx/30min?hide_event_type_details=1&hide_gdpr_banner=1'
    },
    {
      id: 'c2',
      title: 'Carbon Consultation — 30 min',
      icon: Clock,
      description: 'In-depth discussion on project strategy, carbon accounting and market access.',
      location: 'Google Meet',
      url: 'https://calendly.com/agricarbonx/carbon-credit-strategy-consultation?hide_event_type_details=1&hide_gdpr_banner=1'
    },
    {
      id: 'c3',
      title: 'Partnership — 45 min',
      icon: Users,
      description: 'Partnership exploration and integration discussions.',
      location: 'Google Meet',
      url: 'https://calendly.com/agricarbonx/strategic-partnership-discussion?hide_event_type_details=1&hide_gdpr_banner=1'
    },
  ];

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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto font-light">
            Schedule a call with our team to discuss how AgriCarbonX can support your carbon credit goals.
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
                    <div className={`p-3 rounded-xl ${activeTab === tab.id ? 'bg-neon/20' : 'bg-neon/10'}`}>
                      <Icon className="w-6 h-6 text-neon" strokeWidth={2} />
                    </div>
                    <h3 className={`font-heading font-bold ${activeTab === tab.id ? 'text-neon' : 'text-light'}`}>
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
                className={activeTab === tab.id ? 'block' : 'hidden'}
              >
                <div className="mb-6">
                  <p className="text-light/80 mb-2">{tab.description}</p>
                  <p className="text-sm text-light/60">Location: {tab.location}</p>
                </div>

                <div className="bg-dark-deep/50 rounded-xl p-8 text-center border border-neon/10">
                  <Calendar className="w-16 h-16 text-neon mx-auto mb-4 icon-glow-neon" strokeWidth={1.5} />
                  <p className="text-light/70 mb-4">
                    Calendly integration placeholder
                  </p>
                  <p className="text-sm text-light/50 mb-4">
                    In production, the Calendly widget would load here
                  </p>
                  <div className="text-xs text-light/40 font-mono break-all">
                    {tab.url}
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

import { useEffect, useRef, useState } from 'react';
import { Brain, Link2, Leaf, TrendingUp, FileCheck, Database, ArrowUpRight } from 'lucide-react';

export default function TechTools() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const tools = [
    {
      icon: Brain,
      title: 'Carbon Accounting AI',
      description: 'Machine learning algorithms that accurately measure, predict, and optimize carbon sequestration across agricultural operations.',
      metrics: ['99.9% Accuracy', 'Real-time Analysis', 'Predictive Modeling'],
      color: 'neon',
      iconColor: 'icon-glow-neon'
    },
    {
      icon: Link2,
      title: 'Blockchain Traceability',
      description: 'Immutable ledger technology ensuring transparent, tamper-proof tracking of carbon credits from soil to market.',
      metrics: ['100% Transparent', 'Zero Fraud', 'Instant Verification'],
      color: 'violet',
      iconColor: 'icon-glow-violet'
    },
    {
      icon: Leaf,
      title: 'AgriCarbon Soil Analysis',
      description: 'Advanced IoT sensors and satellite imaging for real-time soil health monitoring and carbon content verification.',
      metrics: ['Satellite Imaging', 'IoT Integration', '24/7 Monitoring'],
      color: 'neon',
      iconColor: 'icon-glow-neon'
    },
    {
      icon: TrendingUp,
      title: 'Market Trading Dashboard',
      description: 'Intuitive platform for buying, selling, and managing carbon credits with real-time pricing and market analytics.',
      metrics: ['Live Pricing', 'Market Analytics', 'Portfolio Management'],
      color: 'orange',
      iconColor: 'icon-glow-orange'
    },
    {
      icon: FileCheck,
      title: 'Certification Tracker',
      description: 'Automated compliance monitoring and reporting tools aligned with Verra, Gold Standard, and ISO 14001 frameworks.',
      metrics: ['Auto Compliance', 'Global Standards', 'Instant Reports'],
      color: 'violet',
      iconColor: 'icon-glow-violet'
    },
    {
      icon: Database,
      title: 'Smart Contract Engine',
      description: 'Self-executing agreements that automate credit issuance, transfers, and retirement with zero intermediaries.',
      metrics: ['Auto-execution', 'Gas Optimized', 'Multi-chain Support'],
      color: 'orange',
      iconColor: 'icon-glow-orange'
    },
  ];

  return (
    <section id="tech" ref={sectionRef} className="relative py-32 bg-dark-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
            <span className="text-sm font-semibold text-neon uppercase tracking-wider">Technology Stack</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-black text-light mb-6 tracking-tight">
            Next-Gen <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto font-light">
            Our comprehensive suite of tools transforms how carbon credits are created, verified, and traded in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`group relative perspective-card glass-card p-8 rounded-3xl cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                } ${isActive ? `neon-glow-${tool.color}` : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${tool.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-${tool.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-10 h-10 text-${tool.color} ${tool.iconColor}`} strokeWidth={2} />
                    </div>
                    <ArrowUpRight
                      className={`w-6 h-6 text-light/40 group-hover:text-${tool.color} transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-light mb-4 group-hover:text-neon transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-light/70 leading-relaxed mb-6 text-sm">
                    {tool.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {tool.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-semibold rounded-full bg-${tool.color}/10 text-${tool.color} border border-${tool.color}/20`}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${tool.color}/0 via-${tool.color} to-${tool.color}/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 glass-strong p-12 rounded-3xl border border-neon/20">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: '99.9%', label: 'System Uptime', sublabel: 'Enterprise-grade reliability' },
              { value: '<2s', label: 'Transaction Speed', sublabel: 'Lightning-fast processing' },
              { value: '256-bit', label: 'Encryption', sublabel: 'Military-grade security' }
            ].map((stat, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-heading font-black text-neon mb-3">{stat.value}</div>
                <div className="text-lg font-semibold text-light mb-2">{stat.label}</div>
                <div className="text-sm text-light/60">{stat.sublabel}</div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-px h-20 bg-light/10 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

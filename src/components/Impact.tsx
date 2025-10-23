import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Sprout, Award, ArrowUpRight } from 'lucide-react';

export default function Impact() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ carbon: 0, farms: 0, credits: 0, partners: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targets = { carbon: 50000000, farms: 10000, credits: 2000000, partners: 150 };

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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        carbon: Math.floor(targets.carbon * progress),
        farms: Math.floor(targets.farms * progress),
        credits: Math.floor(targets.credits * progress),
        partners: Math.floor(targets.partners * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: TrendingUp,
      value: `${(counts.carbon / 1000000).toFixed(1)}M+`,
      label: 'Tons CO₂ Captured',
      description: 'Equivalent to removing 10M+ cars from the road',
      color: 'neon'
    },
    {
      icon: Users,
      value: `${(counts.farms / 1000).toFixed(1)}K+`,
      label: 'Farms Onboarded',
      description: 'Empowering farmers across 47 countries',
      color: 'violet'
    },
    {
      icon: Sprout,
      value: `${(counts.credits / 1000000).toFixed(1)}M+`,
      label: 'Carbon Credits Issued',
      description: 'Verified and traded on blockchain',
      color: 'orange'
    },
    {
      icon: Award,
      value: `${counts.partners}+`,
      label: 'Global Partners',
      description: 'Corporations, governments, and NGOs',
      color: 'neon'
    },
  ];

  return (
    <section id="impact" ref={sectionRef} className="relative py-32 bg-dark-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-violet/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-neon" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-neon uppercase tracking-wider">Global Impact</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-black text-light mb-6 tracking-tight">
            Measurable <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto font-light">
            Real numbers that demonstrate our commitment to transforming the carbon credit ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group perspective-card glass-card p-8 rounded-3xl text-center transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${stat.color}/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 text-${stat.color} icon-glow-${stat.color}`} strokeWidth={2} />
                  </div>
                  <div className={`text-5xl font-heading font-black text-${stat.color} mb-3`}>{stat.value}</div>
                  <div className="text-lg font-semibold text-light mb-2">{stat.label}</div>
                  <p className="text-sm text-light/60">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-strong p-12 rounded-3xl border border-neon/20">
          <h3 className="text-4xl font-heading font-bold text-light text-center mb-12">
            The <span className="text-neon">Carbon Lifecycle</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { step: '01', label: 'Soil Analysis', desc: 'IoT sensors measure carbon', icon: Sprout },
              { step: '02', label: 'AI Verification', desc: 'ML validates data accuracy', icon: TrendingUp },
              { step: '03', label: 'Blockchain Record', desc: 'Immutable ledger created', icon: Award },
              { step: '04', label: 'Credit Issuance', desc: 'Smart contracts generate', icon: Users },
              { step: '05', label: 'Market Trading', desc: 'Credits traded globally', icon: ArrowUpRight },
            ].map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-neon/10 border-2 border-neon/30 flex flex-col items-center justify-center mx-auto group-hover:scale-110 group-hover:border-neon transition-all duration-300">
                      <Icon className="w-6 h-6 text-neon mb-1" strokeWidth={2} />
                      <span className="text-xs font-heading font-bold text-neon">{phase.step}</span>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-neon/50 to-transparent"></div>
                    )}
                  </div>
                  <h4 className="font-semibold text-light mb-2">{phase.label}</h4>
                  <p className="text-sm text-light/60">{phase.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

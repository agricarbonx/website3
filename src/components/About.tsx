import { useEffect, useRef, useState } from 'react';
import { Target, Globe, Zap, CheckCircle } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Target,
      title: 'Verify & Tokenize',
      description: 'Verify and tokenize soil carbon with scientific rigor.',
      stats: ['AI Verified', 'Blockchain Secured'],
      color: 'neon'
    },
    {
      icon: Globe,
      title: 'Transparent Credits',
      description: 'Deliver transparent carbon credits to corporate buyers.',
      stats: ['High-Integrity', 'Market-Ready'],
      color: 'violet'
    },
    {
      icon: Zap,
      title: 'Farmer Income',
      description: 'Increase farmer incomes through regenerative ag practices.',
      stats: ['Direct Payment', 'Scalable Income'],
      color: 'orange'
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-32 gradient-bg overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-neon" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-neon uppercase tracking-wider">About Us</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-black text-light mb-6 tracking-tight">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto font-light leading-relaxed">
            AgriCarbonX converts verified soil carbon into high-integrity, tradable credits while empowering farmers with regenerative income. We combine AI, remote sensing and field verification to deliver transparent carbon accounting and enterprise-grade reporting.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group perspective-card glass-card p-10 rounded-3xl transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${feature.color}/10 mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 text-${feature.color} icon-glow-${feature.color}`} strokeWidth={2} />
                  </div>

                  <h3 className="text-3xl font-heading font-bold text-light mb-4">{feature.title}</h3>
                  <p className="text-light/70 leading-relaxed mb-6">{feature.description}</p>

                  <div className="flex gap-3">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className={`px-4 py-2 rounded-lg bg-${feature.color}/10 border border-${feature.color}/20`}>
                        <span className={`text-sm font-semibold text-${feature.color}`}>{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

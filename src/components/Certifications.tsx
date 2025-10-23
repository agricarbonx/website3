import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, Shield, Globe, Sparkles, Building2 } from 'lucide-react';

export default function Certifications() {
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

  const certifications = [
    { name: 'Verra VCS', icon: CheckCircle, color: 'neon' },
    { name: 'Gold Standard', icon: Award, color: 'orange' },
    { name: 'ISO 14001', icon: Shield, color: 'violet' },
    { name: 'Climate Action Reserve', icon: Globe, color: 'neon' },
    { name: 'American Carbon Registry', icon: CheckCircle, color: 'orange' },
    { name: 'UN SDG Aligned', icon: Sparkles, color: 'violet' },
  ];

  const partners = [
    { name: 'Microsoft Carbon Initiative', icon: Building2 },
    { name: 'Amazon Climate Pledge', icon: Building2 },
    { name: 'Tesla Energy Division', icon: Building2 },
    { name: 'World Bank Climate Fund', icon: Globe },
    { name: 'European Green Deal', icon: Globe },
    { name: 'AgTech Innovation Labs', icon: Sparkles },
  ];

  return (
    <section id="certifications" className="relative py-32 gradient-bg overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-neon" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-neon uppercase tracking-wider">Trust & Credibility</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-black text-light mb-6 tracking-tight">
            Trusted <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto font-light">
            Our commitment to excellence validated by leading global standards and industry pioneers.
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl font-heading font-bold text-light text-center mb-12">
            Global Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className={`group perspective-card glass-card p-8 rounded-3xl text-center transform transition-all duration-700 hover:scale-110 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${cert.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                  <div className="relative z-10">
                    <Icon className={`w-14 h-14 text-${cert.color} icon-glow-${cert.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} strokeWidth={2} />
                    <div className="text-sm font-semibold text-light">{cert.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-heading font-bold text-light text-center mb-12">
            Strategic Partners
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={index}
                  className={`group perspective-card glass-card p-8 rounded-3xl transform transition-all duration-700 hover:scale-105 cursor-pointer ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-neon/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-neon icon-glow-neon" strokeWidth={2} />
                    </div>
                    <div className="text-lg font-semibold text-light">{partner.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 glass-strong px-10 py-5 rounded-2xl border-2 border-neon/30">
            <Shield className="w-8 h-8 text-neon icon-glow-neon" strokeWidth={2} />
            <div className="text-left">
              <div className="text-3xl font-heading font-black text-neon">100%</div>
              <div className="text-sm text-light/70">Compliance with International Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

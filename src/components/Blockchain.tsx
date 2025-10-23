import { useEffect, useRef, useState } from 'react';
import { Lock, Layers, Zap, Check, Shield, Database } from 'lucide-react';

export default function Blockchain() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible]);

  const steps = [
    {
      icon: Database,
      title: 'Data Collection',
      description: 'IoT sensors and satellite imaging collect carbon sequestration data.',
      color: 'neon'
    },
    {
      icon: Check,
      title: 'AI Verification',
      description: 'ML algorithms verify data accuracy and calculate eligibility.',
      color: 'violet'
    },
    {
      icon: Lock,
      title: 'Blockchain Immutability',
      description: 'Data encrypted and recorded creating immutable audit trail.',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Smart Contracts',
      description: 'Automated contracts issue credits as NFTs enabling trading.',
      color: 'neon'
    },
    {
      icon: Layers,
      title: 'Market Integration',
      description: 'Credits listed on markets with full traceability.',
      color: 'violet'
    },
  ];

  return (
    <section id="blockchain" ref={sectionRef} className="relative py-32 bg-dark-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon/5 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
            <Lock className="w-4 h-4 text-neon" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-neon uppercase tracking-wider">Blockchain Security</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-black text-light mb-6 tracking-tight">
            Blockchain-Powered <br />
            <span className="gradient-text">Security</span>
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto font-light">
            End-to-end transparency through distributed ledger technology and smart contract automation.
          </p>
        </div>

        <div className="glass-strong p-12 rounded-3xl mb-20 border border-neon/20">
          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  className={`relative transform transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`glass-card p-8 rounded-3xl text-center transition-all duration-500 ${
                      isActive ? `neon-glow-${step.color} scale-105` : ''
                    }`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 transition-all duration-500 ${
                        isActive ? `bg-${step.color}/20` : 'bg-white/5'
                      }`}
                    >
                      <Icon
                        className={`w-10 h-10 transition-all duration-500 ${
                          isActive ? `text-${step.color} icon-glow-${step.color}` : 'text-light/50'
                        }`}
                        strokeWidth={2}
                      />
                    </div>
                    <h3
                      className={`text-xl font-heading font-bold mb-3 transition-colors duration-500 ${
                        isActive ? `text-${step.color}` : 'text-light'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-light/70 leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-neon/50 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Immutable Records',
              description: 'Every transaction is permanently recorded and cannot be altered or deleted.',
              icon: Lock,
              color: 'neon'
            },
            {
              title: 'Zero Fraud',
              description: 'Cryptographic verification ensures only authentic carbon credits enter the market.',
              icon: Shield,
              color: 'violet'
            },
            {
              title: 'Instant Settlement',
              description: 'Smart contracts execute trades in seconds without intermediaries or delays.',
              icon: Zap,
              color: 'orange'
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group perspective-card glass-card p-10 rounded-3xl text-center transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${(index + 5) * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${feature.color}/10 mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 text-${feature.color} icon-glow-${feature.color}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-light mb-4">{feature.title}</h3>
                  <p className="text-light/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

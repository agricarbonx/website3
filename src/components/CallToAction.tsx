import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Users, Briefcase, Rocket } from 'lucide-react';

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const actions = [
    {
      icon: Briefcase,
      title: 'For Investors',
      description: 'Join us in building the future of sustainable finance and carbon markets.',
      cta: 'Investment Opportunities',
      color: 'neon'
    },
    {
      icon: Users,
      title: 'For Partners',
      description: 'Collaborate on innovative solutions that transform the carbon ecosystem.',
      cta: 'Partnership Programs',
      color: 'violet'
    },
    {
      icon: Rocket,
      title: 'For Enterprises',
      description: 'Offset your carbon footprint with verified, blockchain-secured credits.',
      cta: 'Request Demo',
      color: 'orange'
    },
  ];

  return (
    <section id="cta" ref={sectionRef} className="relative py-32 gradient-bg overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-neon/10 rounded-full blur-[150px] animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[150px] animate-pulse-glow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-neon" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-neon uppercase tracking-wider">Get Started</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-black text-light mb-6 tracking-tight">
            Ready to <span className="gradient-text">Transform</span> <br />
            the Future?
          </h2>
          <p className="text-xl text-light/60 max-w-3xl mx-auto font-light">
            Join the AgriCarbonX ecosystem and be part of the solution to climate change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className={`group perspective-card glass-card p-10 rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${action.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${action.color}/10 mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 text-${action.color} icon-glow-${action.color}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-light mb-4">{action.title}</h3>
                  <p className="text-light/70 mb-8 leading-relaxed">{action.description}</p>
                  <button className={`inline-flex items-center gap-3 text-${action.color} font-semibold group-hover:gap-5 transition-all duration-300`}>
                    <span>{action.cta}</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`glass-strong p-12 md:p-16 rounded-3xl max-w-4xl mx-auto border-2 border-neon/20 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-light mb-4">
              Stay <span className="text-neon">Connected</span>
            </h3>
            <p className="text-lg text-light/70">
              Get the latest updates on carbon markets, sustainability trends, and innovations.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-light/40" strokeWidth={2} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-14 pr-6 py-5 rounded-xl glass-card text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-neon font-medium"
              />
            </div>
            <button
              type="submit"
              className="group px-10 py-5 bg-neon text-dark font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:neon-glow flex items-center justify-center gap-3"
            >
              <span>{submitted ? 'Subscribed!' : 'Subscribe'}</span>
              {!submitted && <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

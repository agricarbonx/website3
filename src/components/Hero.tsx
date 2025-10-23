import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp, Shield } from 'lucide-react';
import Particles from './Particles';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building the Future of Carbon, Soil, and Sustainability';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />

      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 grid-pattern opacity-40"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-[120px] animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet/10 rounded-full blur-[100px] animate-pulse-glow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8 border-glow">
            <Sparkles className="w-5 h-5 text-neon icon-glow-neon" strokeWidth={2.5} />
            <span className="text-sm font-semibold tracking-wide text-light/90 uppercase">
              Powered by Blockchain & AI
            </span>
            <div className="w-2 h-2 rounded-full bg-neon animate-pulse-glow"></div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-light mb-8 leading-[0.95] tracking-tight">
            <span className="block mb-4">Agri</span>
            <span className="gradient-text block">Carbon</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl mt-4 font-light tracking-normal">
              Revolution
            </span>
          </h1>

          <div className="h-24 md:h-20 mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-light/80 font-light max-w-4xl mx-auto leading-relaxed">
              {typedText}
              <span className="inline-block w-1 h-7 md:h-8 bg-neon ml-1 animate-pulse"></span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button
              onClick={() => scrollToSection('tech')}
              className="group relative px-10 py-5 bg-neon text-dark font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:neon-glow flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Explore Technology</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
              <div className="absolute inset-0 bg-gradient-to-r from-neon to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button
              onClick={() => scrollToSection('cta')}
              className="group relative px-10 py-5 glass-strong font-bold text-lg rounded-xl border-2 border-neon/30 text-light transition-all duration-300 transform hover:scale-105 hover:border-neon hover:neon-glow flex items-center gap-3"
            >
              <span>Join Network</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: TrendingUp,
              value: '50M+',
              label: 'Tons CO₂ Captured',
              color: 'neon',
              gradient: 'from-neon/20 to-neon/5'
            },
            {
              icon: Sparkles,
              value: '10K+',
              label: 'Farms Onboarded',
              color: 'violet',
              gradient: 'from-violet/20 to-violet/5'
            },
            {
              icon: Zap,
              value: '2M+',
              label: 'Credits Issued',
              color: 'orange',
              gradient: 'from-orange/20 to-orange/5'
            },
            {
              icon: Shield,
              value: '150+',
              label: 'Global Partners',
              color: 'neon',
              gradient: 'from-neon/20 to-neon/5'
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group perspective-card glass-card p-8 rounded-2xl border-glow relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Icon
                      className={`w-10 h-10 text-${stat.color} icon-glow-${stat.color} group-hover:scale-110 transition-transform duration-300`}
                      strokeWidth={2}
                    />
                    <div className={`w-3 h-3 rounded-full bg-${stat.color} animate-pulse`}></div>
                  </div>

                  <div className={`text-4xl lg:text-5xl font-heading font-black text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>

                  <div className="text-sm font-medium text-light/70 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 glass-card px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-light/70">Real-time Verification</span>
            </div>
            <div className="w-px h-6 bg-light/20"></div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-neon" strokeWidth={2} />
              <span className="text-sm text-light/70">100% Blockchain Secured</span>
            </div>
            <div className="w-px h-6 bg-light/20"></div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-orange" strokeWidth={2} />
              <span className="text-sm text-light/70">Instant Settlement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Leaf, Mail, Phone } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Leaf className="w-8 h-8 text-neon" />
            <span className="text-xl font-heading font-bold text-light">
              Agri<span className="text-neon">CarbonX</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6 text-sm">
              <a href="mailto:info@agricarbonx.com" className="flex items-center gap-2 text-light/80 hover:text-neon transition-colors">
                <Mail className="w-4 h-4" strokeWidth={2} />
                <span>info@agricarbonx.com</span>
              </a>
              <div className="w-px h-4 bg-light/20"></div>
              <a href="tel:+919880973453" className="flex items-center gap-2 text-light/80 hover:text-neon transition-colors">
                <Phone className="w-4 h-4" strokeWidth={2} />
                <span>+91-9880973453</span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-light hover:text-neon transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tech')}
              className="text-light hover:text-neon transition-colors duration-200"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-light hover:text-neon transition-colors duration-200"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-light hover:text-neon transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="glass px-4 py-2 rounded-lg text-neon hover:neon-glow transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

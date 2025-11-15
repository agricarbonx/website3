import { Leaf, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark-deep border-t border-neon/10 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet/5 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-neon/10">
                <Leaf className="w-8 h-8 text-neon icon-glow-neon" strokeWidth={2.5} />
              </div>
              <span className="text-3xl font-heading font-black text-light">
                Agri<span className="text-neon">CarbonX</span>
              </span>
            </div>
            <p className="text-light/70 mb-8 max-w-md leading-relaxed">
              Pioneering the future of carbon credits through blockchain technology, AI-driven verification, and sustainable agricultural practices.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-light/70">
                <MapPin className="w-5 h-5 text-neon flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <div className="font-semibold text-light mb-1">AgriCarbonX Technologies Pvt. Ltd.</div>
                  <div>Level 9, Prestige Trade Tower</div>
                  <div>46 Palace Road, Vasanth Nagar</div>
                  <div>Bengaluru, Karnataka 560001, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-light/70">
                <Mail className="w-5 h-5 text-neon" strokeWidth={2} />
                <a href="mailto:info@agricarbonx.com" className="hover:text-neon transition-colors">info@agricarbonx.com</a>
              </div>
              <div className="flex items-center gap-3 text-light/70">
                <Phone className="w-5 h-5 text-neon" strokeWidth={2} />
                <a href="tel:+919880973453" className="hover:text-neon transition-colors">+91-9880973453</a>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl mb-8">
              <p className="text-xs text-light/60">
                For partnerships, press or certification requests, email <a href="mailto:info@agricarbonx.com" className="text-neon hover:underline">info@agricarbonx.com</a>
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/agricarbonx' },
                { Icon: Twitter, label: 'X (Twitter)', href: 'https://twitter.com/agricarbonx' },
                { Icon: Mail, label: 'Instagram', href: 'https://instagram.com/agricarbonx' },
                { Icon: Github, label: 'YouTube', href: 'https://youtube.com/@agricarbonx' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:neon-glow transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-light group-hover:text-neon transition-colors" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-light text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Technology', id: 'tech' },
                { label: 'Impact', id: 'impact' },
                { label: 'Blockchain', id: 'blockchain' },
                { label: 'Partners', id: 'certifications' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-light/70 hover:text-neon transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon/50"></span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-light text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'API Access', 'Whitepaper', 'Blog', 'Support', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-light/70 hover:text-neon transition-colors duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-light/60 text-sm">
            &copy; {new Date().getFullYear()} AgriCarbonX — Pursuing global carbon standards. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Data & Cookies'].map((item) => (
              <a key={item} href="#" className="text-light/60 hover:text-neon transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

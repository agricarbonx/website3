import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechTools from './components/TechTools';
import Impact from './components/Impact';
import Certifications from './components/Certifications';
import Blockchain from './components/Blockchain';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <TechTools />
      <Impact />
      <Certifications />
      <Blockchain />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;

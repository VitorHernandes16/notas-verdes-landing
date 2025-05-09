
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white nav-shadow py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('reasons')}
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Por que deveríamos doar notinhas
          </button>
          <Button onClick={() => scrollToSection('contact')}>
            Contato
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white py-4 nav-shadow transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary font-medium py-2"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('reasons')}
            className="text-foreground hover:text-primary font-medium py-2"
          >
            Por que deveríamos doar notinhas
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="w-full"
          >
            Contato
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

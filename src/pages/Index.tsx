
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ReasonsSection from '@/components/ReasonsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add animation to reason cards when they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => observer.observe(card));

    return () => {
      reasonCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ReasonsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

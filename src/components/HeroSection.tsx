import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
const HeroSection = () => {
  return <section id="home" className="pt-28 pb-16 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Sasbemc Donation Initiative" className="w-full h-auto object-cover" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sasbemc
            </h1>
            <h2 className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8">
              Ajudando a transformar pequenas contribuições em grandes impactos.
              Cada notinha verde doada se transforma em esperança e oportunidades
              para quem mais precisa.
            </h2>
            <div className="flex flex-wrap gap-4">
              
              <Button onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="bg-white border-2 border-primary text-primary hover:bg-primary/10 font-bold">
                Contato
              </Button>
              <Button onClick={() => {
              window.open('https://wa.me/5500000000000', '_blank');
            }} className="bg-green-600 hover:bg-green-700 text-white font-bold">
                <Phone className="mr-2" size={18} />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
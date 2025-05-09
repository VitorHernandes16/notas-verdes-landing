
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
            <p className="mt-3 text-gray-600 max-w-md">
              Transformando pequenas contribuições em grandes mudanças para nossa comunidade.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-bold mb-3">Links rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#home" 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#reasons" 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Por que doar
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Contato</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  <span className="font-medium">Email:</span> contato@sasbemc.org
                </li>
                <li className="text-gray-600">
                  <span className="font-medium">Telefone:</span> (00) 0000-0000
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sasbemc. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

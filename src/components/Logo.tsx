
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
       <img src="logo.png" alt="Sasbemc" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Logo;

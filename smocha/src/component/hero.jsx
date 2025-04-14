import React from 'react';

function Hero() {
  return (
    <div className="relative flex items-center justify-center h-[70vh] bg-fixed bg-center bg-cover">
      <img 
        src="/images/hero.jpg" 
        alt="Worship Service" 
        className="absolute h-full w-full object-cover"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]" />

      <div className="relative p-4 sm:p-5 text-white z-[2] w-full max-w-[1240px] mx-auto text-center">
        <h1 className="text-orange-400 text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
          KWA MIKE 
        </h1>
        <h1 className="text-xl  sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
          Street bites. Full flavor. Fast fix.
        </h1>
      </div>
    </div>
  );
}

export default Hero;

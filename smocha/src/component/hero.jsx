import React from 'react';

function Hero() {
  return (
    <div
      className="relative flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ height: '70vh' }}
    >
      <img
        src="/images/hero.jpg"
        alt="Worship Service"
        className="absolute h-full w-full object-cover"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]" />

      <div
        className="relative text-white z-[2] w-full max-w-[1240px] mx-auto text-center"
        style={{
          padding: '16px',
        }}
      >
        <h1
          className="text-orange-400 font-bold leading-tight"
          style={{
            fontSize: '48px',
            marginBottom: '32px',
          }}
        >
          KWA MIKE
        </h1>
        <h1
          className="font-bold leading-tight"
          style={{
            fontSize: '48px',
            marginBottom: '32px',
          }}
        >
          Street bites. Full flavor. Fast fix.
        </h1>
      </div>
    </div>

  );
}

export default Hero;

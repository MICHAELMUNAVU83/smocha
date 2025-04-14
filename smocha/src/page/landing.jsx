import React from 'react';
import Hero from '../component/hero';
import Menu from '../component/menu';

function Landing() {
    return (
        <div>
            <Hero />
            <div className="relative h-full min-h-screen">
                {/* background color  */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#a13623dc]"></div>
                {/* Foreground Content */}
                <div className="relative z-10 px-4 py-10">
                    <h1 className="text-5xl text-center font-extrabold text-black mb-6">
                    KWA MIKE MENU
                    </h1>
                    <Menu />
                </div>
            </div>
        </div>
    );
}

export default Landing;

import React from 'react';
import Hero from '../component/hero';
import Menu from '../component/menu';

function Landing() {
    return (
        <div>
            <Hero />
            <div className="relative h-full min-h-screen">
                {/* Background Image with opacity layer */}
                <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center opacity-90 z-0"></div>

                {/* Foreground Content */}
                <div className="relative z-10 px-4 py-10">
                    <h1 className="text-5xl text-center font-extrabold text-black mb-6">
                        KENYAN MENU
                    </h1>
                    <Menu />
                </div>
            </div>
        </div>
    );
}

export default Landing;

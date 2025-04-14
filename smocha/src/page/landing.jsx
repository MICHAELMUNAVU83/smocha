import React from 'react';
import Hero from '../component/hero';
import Menu from '../component/menu';

function Landing() {
    return (
        <div>
            <Hero />
            <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen items-top justify-center"
            >
                <h1 className="text-5xl text-center  font-extrabold text-black ">
                    KENYAN MENU
                </h1>
                <div className='mt-4'>
                    <Menu />
                </div>
                
            </div>
        </div>
    );
}

export default Landing;

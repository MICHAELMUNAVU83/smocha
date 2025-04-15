import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import Hero from '../component/hero';
import Menu from '../component/menu';

function Landing() {
    const navigate = useNavigate();
    return (
        <div>
            <Hero />
            <div className="relative h-full min-h-screen">
                <div
                    className="relative h-full min-h-screen bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/bg.jpg')" }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#754728d3] z-0"></div>

                    {/* Foreground Content */}
                    <div className="relative z-10" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '40px', paddingBottom: '40px' }}>
                        <h1
                            className="text-5xl text-center font-extrabold text-white"
                            style={{ marginBottom: '24px' }}
                        >
                            KWA MIKE MENU
                        </h1>

                        {/* Floating Cart Button */}
                        <button
                            onClick={() => navigate('/payment')}
                            className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg z-50 transition-all"
                            aria-label="Go to Cart"
                            style={{ padding: '16px', bottom: '24px', right: '24px' }}
                        >
                            <ShoppingCart size={24} />
                        </button>

                        <Menu />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Landing;

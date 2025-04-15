import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSauces, setSelectedSauces] = useState([]);
    const [selectedAdditives, setSelectedAdditives] = useState([]);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);




    const menuData = [
        {
            name: 'SMOCHA',
            image: '/images/smocha.jpeg',
            price: 60,
            brief: 'Chapati with Smokies inside',
            description:
                'The classic street legend — a smokie wrapped in a chapati, spiked with kachumbari and chili sauce. Pure vibes in every bite.',
        },
        {
            name: 'SMOKIES',
            image: '/images/smokie.jpeg',
            price: 40,
            brief: 'Served with Kachumbari natly',
            description:
                'Juicy and savory, served hot with a dash of chili or ketchup. Grab one, or two, or three — they disappear quick.',
        },
        {
            name: 'VIAZI',
            image: '/images/viazi.jpeg',
            price: 20,
            brief: 'Spiced potatoes with herbs',
            description:
                'Fried or boiled — humble but mighty. A street classic that never lets you down.',
        },
        {
            name: 'SAMOSA',
            image: '/images/samosa.jpeg',
            price: 30,
            brief: 'Traditional Kenyan pastry',
            description:
                'Crispy triangle pastry filled with spiced mince or veggies.',
        },
        {
            name: 'HOT DOG',
            image: '/images/hotdog.jpeg',
            price: 60,
            brief: 'Premium beef sausage',
            description:
                'A street-style sausage sandwich with tangy toppings. Perfect for when you want that extra bite with a soft bun feel.',
        },
        {
            name: 'CHAPO',
            image: '/images/chapati.jpeg',
            price: 30,
            brief: 'Traditional Kenyan chapati',
            description:
                'Soft, layered, and freshly made. Roll it up, dip it, or eat it solo. It’s that versatile.',
        },
    ];

    const sauceOptions = [
        { name: 'Tomato', image: '/images/sauces/ketchup.jpeg' },
        { name: 'Chili', image: '/images/sauces/chili.jpg' },
        { name: 'Choma', image: '/images/sauces/choma-sauce.png' },

    ];

    const additiveOptions = ['Kachumbari', 'Pilipili', 'Salt'];

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
    }, [cartItems]);


    const handleAddToCart = () => {
        const order = {
            item: selectedItem,
            quantity,
            sauces: selectedSauces,
            additives: selectedAdditives,
            total: quantity * selectedItem.price
        };

        setCartItems((prev) => {
            const updatedCart = [...prev, order];
            localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
            return updatedCart;
        });
    };

    const handleGoToCheckout = () => {
    
        const order = {
            item: selectedItem,
            quantity,
            sauces: selectedSauces,
            additives: selectedAdditives,
            total: quantity * selectedItem.price
        };
    
    
        navigate('/payment');
    };
    


    const handleBuy = () => {
        const order = {
            item: selectedItem,
            quantity,
            sauces: selectedSauces,
            additives: selectedAdditives,
            total: quantity * selectedItem.price
        };
        navigate('/payment', );
    };

    const handleAdditiveToggle = (additive) => {
        setSelectedAdditives((prev) =>
            prev.includes(additive)
                ? prev.filter((a) => a !== additive)
                : [...prev, additive]
        );
    };

    const handleSauceToggle = (sauce) => {
        setSelectedSauces((prev) =>
            prev.includes(sauce)
                ? prev.filter((s) => s !== sauce)
                : [...prev, sauce]
        );
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setQuantity(1);
        setSelectedSauces([]);
    };

    return (
        <main className="max-w-7xl mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full aspect-[1/1]"
                        />
                        <div className="p-6 flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-2xl font-bold text-[#4c1f13] mb-1">
                                    {item.name}
                                </h2>
                                <p className="text-yellow-800 font-medium mb-2">{item.brief}</p>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="inline-block bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full font-bold hover:bg-yellow-600 transition"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 relative space-y-4">
                        {/* Close */}
                        <button
                            className="absolute top-2 right-3 text-2xl font-bold text-gray-700"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>

                        {/* Image */}
                        <img
                            src={selectedItem.image}
                            alt={selectedItem.name}
                            className="rounded-md w-full object-cover aspect-[1/1]"
                        />

                        {/* Sauces */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-[#4c1f13]">Choose Your Sauce(s):</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {sauceOptions.map((sauce) => (
                                    <button
                                        key={sauce.name}
                                        onClick={() => handleSauceToggle(sauce.name)}
                                        className={`flex flex-col items-center justify-center border rounded-xl p-2 transition ${selectedSauces.includes(sauce.name)
                                            ? 'bg-yellow-100 border-yellow-500'
                                            : 'bg-white border-gray-300'
                                            } hover:shadow-md`}
                                    >
                                        <img
                                            src={sauce.image}
                                            alt={sauce.name}
                                            className="w-14 h-14 object-contain mb-1"
                                        />
                                        <span className={`text-sm font-medium ${selectedSauces.includes(sauce.name)
                                            ? 'text-yellow-900'
                                            : 'text-gray-800'
                                            }`}>
                                            {sauce.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Additives */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-[#4c1f13]">Choose Additives:</h3>
                            <div className="flex flex-wrap gap-2">
                                {additiveOptions.map((additive) => (
                                    <button
                                        key={additive}
                                        onClick={() => handleAdditiveToggle(additive)}
                                        className={`px-3 py-1 rounded-full border ${selectedAdditives.includes(additive)
                                            ? 'bg-yellow-300 text-yellow-900 font-semibold'
                                            : 'bg-white text-gray-800'
                                            } hover:border-yellow-500 transition`}
                                    >
                                        {additive}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    className="px-3 py-1 text-xl font-bold bg-gray-200 rounded"
                                >
                                    -
                                </button>
                                <span className="text-xl">{quantity}</span>
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="px-3 py-1 text-xl font-bold bg-gray-200 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <div className="text-xl font-semibold text-yellow-800">
                                Total: KES {quantity * selectedItem.price}
                            </div>
                        </div>

                        {/* Buy Button */}
                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="bg-yellow-500 text-yellow-900 py-2 px-4 rounded-full font-bold hover:bg-yellow-600 w-full mb-3"
                        >
                            Add to Cart
                        </button>

                        {/* Go to Checkout */}
                        <button
                            onClick={handleGoToCheckout}
                            className="bg-green-500 text-white py-2 px-4 rounded-full font-bold hover:bg-green-600 w-full"
                        >
                            Go to Checkout
                        </button>



                    </div>
                </div>
            )}
        </main>
    );
}

export default Menu;

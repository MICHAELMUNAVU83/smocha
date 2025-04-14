import React from 'react';

function Menu() {
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

    return (
        <main className="container mx-auto py-10 px-4 space-y-6">
            {menuData.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Image Section */}
                    <div className="md:w-1/3">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-[#4c1f13] mb-1">
                                {item.name}
                            </h2>
                            <p className="text-yellow-800 font-medium mb-2">{item.brief}</p>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                        <div className="mt-4">
                            <a
                                href={`/paymentinfo/${item.name.toLowerCase()}`}
                                className="inline-block bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full font-bold hover:bg-yellow-600 transition"
                            >
                                KES {item.price} 
                            </a>
                        </div>

                    </div>
                </div>
            ))}
        </main>
    );
}

export default Menu;

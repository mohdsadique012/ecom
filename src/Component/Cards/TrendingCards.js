import React from 'react';
import { AiFillStar } from "react-icons/ai";

export default function TrendingCards() {
    const imageUrl = 'https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600';
    const title = 'Sample Product';
    const price = 2500;
    const reviews = 5;
    const rating = 5;
    const isSpecialOffer = true;

    return (
        <div className="bg-white w-56 md:w-64 rounded-lg shadow-lg overflow-hidden relative transform transition-transform duration-300 hover:scale-105 mx-2">
            <img src={imageUrl} alt={title} className="w-full h-40 md:h-48 object-cover" />

            {isSpecialOffer && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <h2 className="text-white text-xl md:text-2xl font-bold font-oleo">Special Offer</h2>
                </div>
            )}

            <div className="p-3 md:p-4">
                <h3 className="text-base md:text-lg font-semibold mb-1 text-gray-800">{title}</h3>
                
                <div className="flex items-center mb-2 text-yellow-500">
                    {[...Array(rating)].map((_, index) => (
                        <AiFillStar key={index} />
                    ))}
                    <span className="ml-2 text-xs md:text-sm text-gray-500">({reviews} Reviews)</span>
                </div>

                <p className="text-lg md:text-xl font-semibold text-blue-600">{price} Rs</p>
            </div>
        </div>
    );
}

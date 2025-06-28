import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Image1 from "../../assets/bags/7/IMG_3113.jpg";

const AttractiveCard = () => {
    // Static data
    const imageUrl = Image1;
    const title = 'Sample Product';
    const rating = 4;
    const reviews = 125;
    const price = 'Rs 299';

    return (
        <div className="bg-pink-500 w-56 md:w-64 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl mx-2">   
            <img 
                src={imageUrl}
                alt={title} 
                className="w-full h-40 md:h-48 object-cover transition-transform duration-300 hover:scale-110" 
                style={{ filter: 'drop-shadow(0 4px 6px #ff007f)' }}
            />

            <div className="p-3 md:p-4">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-white transition-colors duration-300 hover:text-yellow-300">
                    {title}
                </h3>

                <div className="flex items-center mb-1 md:mb-2 text-yellow-300">
                    {[...Array(rating)].map((_, index) => (
                        <AiFillStar key={index} className="transition-transform duration-300 hover:scale-110" />
                    ))}
                    <span className="ml-2 text-xs md:text-sm text-gray-200">({reviews} Reviews)</span>
                </div>

                <p className="text-lg md:text-xl font-bold text-yellow-300">{price}</p>

                <button className="mt-2 md:mt-3 w-full bg-white text-blue-600 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 font-semibold">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default AttractiveCard;

// AttractiveCard.tsx
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

// Static data for the card
const LatestCard = () => {
    const imageUrl = 'https://i.etsystatic.com/5995066/r/il/e6131c/3211650962/il_570xN.3211650962_4rhm.jpg';
    const title = 'Sample Product';
    const rating = 4; // Assume 4 out of 5 stars
    const reviews = 125; // Total reviews
    const originalPrice = 399; // Original price for calculation
    const discountPercentage = 25; // Discount percentage
    const discountedPrice = originalPrice - (originalPrice * discountPercentage / 100);
    
    return (
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 w-64 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-white rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-300 hover:text-pink-600">
                    {title}
                </h3>
                <div className="flex items-center mb-2 text-yellow-500">
                    {[...Array(rating)].map((_, index) => (
                        <AiFillStar key={index} className="transition-transform duration-300 hover:scale-110" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({reviews} Reviews)</span>
                </div>
                <p className="text-xl font-bold text-gray-800">
                    Rs {discountedPrice} <span className="line-through text-gray-500">Rs {originalPrice}</span>
                </p>
                <p className="text-red-500 font-semibold">{discountPercentage}% Off</p>
                <button
                    className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg shadow-md hover:bg-gradient-to-br transition duration-300 font-semibold"
                    aria-label={`Buy ${title} for Rs ${discountedPrice}`}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default LatestCard;

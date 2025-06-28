// AttractiveCard.tsx
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

// Static data for the card
const NewArrivalCards = () => {
    const imageUrl = 'https://i.etsystatic.com/5995066/r/il/e6131c/3211650962/il_570xN.3211650962_4rhm.jpg';
    const title = 'Sample Product';
    const rating = 4; // Assume 4 out of 5 stars
    const reviews = 125; // Total reviews
    const price = 'Rs 299';
    const description = 'This is a great product that offers exceptional quality and value. Perfect for everyday use, it combines style and functionality.';

    return (
        <div className="bg-gradient-to-br from-teal-500 to-orange-500 w-72 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4 bg-white rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-300 hover:text-orange-600">
                    {title}
                </h3>
                <div className="flex items-center mb-2 text-yellow-500">
                    {[...Array(rating)].map((_, index) => (
                        <AiFillStar key={index} className="transition-transform duration-300 hover:scale-110" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({reviews} Reviews)</span>
                </div>
                <p className="text-md text-gray-700 mb-3">{description}</p>
                <p className="text-2xl font-bold text-gray-800">{price}</p>
                <button
                    className="mt-4 w-full bg-gradient-to-r from-orange-500 to-teal-500 text-white py-2 rounded-lg shadow-md hover:bg-gradient-to-br transition duration-300 font-semibold"
                    aria-label={`Buy ${title} for ${price}`}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default NewArrivalCards;

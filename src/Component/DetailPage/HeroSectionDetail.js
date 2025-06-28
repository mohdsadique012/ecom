import React from 'react';
import { useLocation } from 'react-router-dom';
import { bagProducts } from '../Data/index.js'
import { IoHeart } from "react-icons/io5"
import { FaTruck } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

function HeroSectionDetail() {
    const url = useLocation();
    const product = bagProducts.find((product) => product.url === url.pathname);
    
    const [image, setImage] = React.useState(product.img);
    const [selectedSize, setSelectedSize] = React.useState('41');  // Default size is 41

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 p-6">
            {/* Left Section: Product Images */}
            <div className="flex flex-col gap-3 w-full md:w-1/2">
                {/* Main Product Image */}
                <div className="h-[400px] rounded-lg p-4 bg-[#F1EFEC] flex items-center justify-center mb-4">
                    <img
                        src={image} // Replace with actual product image URL
                        alt="Product"
                        className="w-full h-full object-contain"
                        style={{ mixBlendMode: 'multiply' }}
                    />
                </div>

                {/* Thumbnail Images */}
                <div className="flex flex-wrap gap-2 p-2 rounded-lg">
                    <div className="flex flex-col items-center">
                        <img
                            onClick={() => setImage(product.img2)}
                            src={product.img2} // Replace with actual thumbnail image URL
                            alt="Thumbnail 1"
                            className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            onClick={() => setImage(product.img3)}
                            src={product.img3} // Replace with actual thumbnail image URL
                            alt="Thumbnail 2"
                            className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>
                    <div className="flex flex-col  items-center">
                        <img
                            onClick={() => setImage(product.img4)}
                            src={product.img4} // Replace with actual thumbnail image URL
                            alt="Thumbnail 3"
                            className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            onClick={() => setImage(product.img5)}
                            src={product.img5} // Replace with actual thumbnail image URL
                            alt="Thumbnail 4"
                            className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center border rounded-lg cursor-pointer">
                        +4 more
                    </div>
                </div>
            </div>

            {/* Right Section: Product Details */}
            <div className="flex flex-col w-full md:w-1/2">
                {/* Brand and Title */}
                <div className="mb-4">
                    <h4 className="text-gray-500 text-sm">{product.tagline}</h4>
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm mt-2">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <span className="text-gray-500 ml-2">(42 reviews)</span>
                    </div>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-black mb-4">{product.price}</div>

                {/* Size Options */}
                {/* <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Size - EU Men</h4>
                    <div className="grid grid-cols-4 gap-2">
                        {['40.5', '41', '42', '43', '43.5', '44', '44.5', '45', '46'].map((size) => (
                            <button
                                key={size}
                                className={`border rounded-lg px-4 py-2 text-sm ${selectedSize === size ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <a href="#" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
                        Size guide
                    </a>
                </div> */}

                {/* Add to Cart Button */}
                <div className="flex items-center gap-4">
                    <a href={`${url.pathname}/checkout`} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                        Buy Now
                    </a>
                    <button className="border rounded-lg text-xl px-6 py-3 hover:bg-gray-100">
                        <IoHeart />
                    </button>
                </div>

                {/* Free Delivery Info */}
                <p className="text-gray-500 flex items-center gap-3 text-sm mt-4">
                    <FaTruck /> Free delivery on orders over $30.0
                </p>

                <p className="text-gray-500 flex items-center gap-3 text-base mt-4">
                    {product.description}
                </p>
            </div>
        </div>
    );
}

export default HeroSectionDetail;

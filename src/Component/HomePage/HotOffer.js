import React from 'react';
import { FaFire } from 'react-icons/fa';
import bag10 from '../../assets/bags/15/1.jpg';
function HotOffer() {
   
  return (
    <div className="bg-white w-full box-border py-6 rounded-lg shadow-lg p-6 flex flex-col items-start text-center">
      {/* Hot Offer Tagline */}
      <div className="flex items-center text-pink-500 text-sm font-semibold uppercase mb-4">
        <FaFire className="mr-2" />
        Hot Offer
      </div>

      {/* Product Image */}
      <div className='w-full h-full flex items-center justify-center'>
      <img
        src={bag10}// Replace with actual image URL
        alt="Sony WH-XB910N"
        className="w-40 h-40 object-contain mb-4"
      />
</div>
      {/* Product Title */}
      <div className='flex w-full justify-between items-center'>
        <div className='flex flex-col justify-between items-start'>
      <h2 className="font-bold mb-2">Everyday Tote Bag</h2>

      {/* Price Section */}
      <div className="font-bold text-black mb-2">
        <span className="line-through text-gray-500 mr-2">₹2,999 INR</span>
        ₹2,099 INR
      </div>

      {/* Shop Now Button */}
      <a href='/15' className="bg-pink-500 text-sm text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">
        Shop Now
      </a>
      </div>
      {/* Discount */}
      <p className="text-orange-500 m-0 mt-14 text-lg font-bold">30% OFF</p>
      </div>
    </div>
  );
}

export default HotOffer;

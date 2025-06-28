import React from 'react';
import { AiFillFire } from "react-icons/ai";
import {bagProducts} from '../Data/index'
function FeaturedCard() {
  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Featured Product</h2>
        <a href='/all' className=" font-semibold hover:underline">SEE ALL</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {bagProducts.slice(0,8).map((product) => (
          <div
            key={product.id}
            className="bg-white hover:shadow-md max-md:shadow-md max-md:hover:shadow-lg transition-shadow"
          >
            <div className="relative py-4 rounded-t-lg bg-gray-200">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 mix-blend-multiply object-contain"
              />
              <span className="absolute top-4 left-4 bg-[#BF3131] text-white text-xs p-1 rounded">
                <AiFillFire />
              </span>
            </div>
            <div className='p-4 pt-4'>
            <h3 className="text-sm font-bold mb-0 line-clamp-2">{product.title}</h3>
            <div className="flex items-center text-yellow-500 text-sm mb-0">
              ★★★★★ <span className="ml-2 text-gray-500">{product.rating}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              {/* {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              ))} */}
            </div>
            {/* <div className="flex items-center gap-2 mb-4">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="border rounded px-2 py-1 text-xs hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div> */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-black">{product.price}</div>
                <div className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </div>
              </div>
              <a href={product.url} className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-[#A86523]">
                Shop Now
              </a>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCard;

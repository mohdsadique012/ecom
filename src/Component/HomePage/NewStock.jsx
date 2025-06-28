import React from 'react';

import {bagProducts} from '../Data/index.js'
function NewStock() {
  return (
    <div className="p-6 py-10 md:py-20 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <a href='/all' className="text-blue-600 font-semibold hover:underline">See all</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {bagProducts.slice(14,18).map((item) => (
          <a
          href={item.url}
            key={item.title}
            className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-200 text-blue-900 text-xs px-2 py-1 rounded">
                Best Seller
              </span>
              <span className="text-gray-500 text-xs">{item.colors}</span>
            </div>
            <img
              src={item.img5}
              alt={item.title}
              className="w-full h-[250px] mix-blend-multiply object-contain mb-4"
            />
            <div className=' flex items-center justify-between'>
                <div>
            <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
            <div className=" font-bold text-gray-900 mb-4">{item.price}</div>
            </div>
            <button className="bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-100">
              +
            </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NewStock;

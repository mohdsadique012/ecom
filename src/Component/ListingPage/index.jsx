import React from 'react';
import {bagProducts} from '../Data/index.js'
function ListingPage() {
  return (
    <div className=" p-0">
      {/* Header Section */}
      <div className=" relative before:absolute before:w-full before:h-full before:content-[''] before:top-0 before:left-0 before:bg-[rgba(0,0,0,0.4)] flex items-center justify-center h-[230px]">
        <img
          src="https://img.freepik.com/free-photo/bags_1303-4465.jpg?t=st=1745653734~exp=1745657334~hmac=0fd58ab893ff6ab886ac6eac5e909f429068cc82dbeb205dda7955db2e9cf28d&w=1380"
            alt="Banner"
            className="absolute -z-10 blur-[1px] inset-0 w-full h-full object-cover"
          />
        <h1 className="text-4xl z-10 text-[#fff] font-bold">Simple is More</h1>
      </div>
<div className='p-6'>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span><a href="/">Home</a></span> &gt; <span>Bags</span>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">{bagProducts.length} result for Bags</h2>
        <div className="flex items-center max-md:hidden gap-4">
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <i className="fas fa-th"></i>
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <i className="fas fa-list"></i>
          </button>
          <select className="border rounded-lg p-2">
            <option>Sort by Popular</option>
            <option>Sort by Price</option>
            <option>Sort by Newest</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filter Section */}
        <div className="w-1/4 max-md:hidden bg-white p-4 h-screen sticky top-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">Filter</h3>
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Brand</h4>
            <input
              type="text"
              placeholder="Search brand..."
              className="w-full border rounded-lg p-2 mb-2"
            />
            <ul className="text-sm">
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Nike <span className="ml-auto text-gray-500">123</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Adidas <span className="ml-auto text-gray-500">55</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Apple <span className="ml-auto text-gray-500">6</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Price</h4>
            <input
              type="range"
              className="w-full"
              min="2900"
              max="300000"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>2900 SAR</span>
              <span>300,000 SAR</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Size</h4>
            <div className="flex gap-2">
              <button className="border rounded-lg px-4 py-2">XS</button>
              <button className="border rounded-lg px-4 py-2">S</button>
              <button className="border rounded-lg px-4 py-2">M</button>
              <button className="border rounded-lg px-4 py-2">L</button>
              <button className="border rounded-lg px-4 py-2">XL</button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Color</h4>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Product Listing Section */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {bagProducts.map((product) => (
            <a
            href={`${product.url}`}
              key={product.url}
              className="rounded flex flex-col items-start"
            >
                <div className='bg-[#E8F9FF] p-4 py-2 pb-0 rounded-lg  w-full'>
              {!product.isNew && (
                <span className="bg-[#0118D8] text-white text-[10px] px-2 py-1 rounded mb-2">
                  New Article
                </span>
              )}
              <img
                src={product.img}
                alt={product.name}
                className="w-full mix-blend-multiply h-auto object-contain mb-4"
              />
              </div>
              <div className='p-2'>
                <div>
              <h3 className="text-sm font-bold">{product.brand}</h3>
              <p className="text-sm text-gray-500">{product.title}</p>
              <p className=" font-bold text-sm text-[#0118D8]">{product.price}</p>
              <p className="text-xs text-red-500">{product.count}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default ListingPage;

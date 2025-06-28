import React, { useState, useMemo } from 'react';
import { bagProducts } from '../Data/index.js';

function ListingPage() {
  const [search, setSearch] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortOption, setSortOption] = useState('');

  // Extract brands from products
  const brands = useMemo(() => {
    return [...new Set(bagProducts.map(item => item.title.split(' ')[0]))];
  }, []);

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    return bagProducts
      .filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      )
      .filter(item =>
        selectedBrands.length === 0 || selectedBrands.includes(item.title.split(' ')[0])
      )
      .filter(item => {
        const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
        return priceNum >= priceRange[0] && priceNum <= priceRange[1];
      })
      .sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        if (sortOption === 'Price') return priceA - priceB;
        if (sortOption === 'Name') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [search, selectedBrands, priceRange, sortOption]);

  return (
    <div className="p-0">
      {/* Header */}
      <div className="relative before:absolute before:w-full before:h-full before:content-[''] before:top-0 before:left-0 before:bg-[rgba(0,0,0,0.4)] flex items-center justify-center h-[230px]">
        <img
          src="https://img.freepik.com/free-photo/bags_1303-4465.jpg"
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
          <h2 className="text-lg font-bold">{filteredProducts.length} result for Bags</h2>
          <div className="flex items-center max-md:hidden gap-4">
            <select className="border rounded-lg p-2" onChange={(e) => setSortOption(e.target.value)}>
              <option>Sort by Popular</option>
              <option value="Price">Sort by Price</option>
              <option value="Name">Sort by Name</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter */}
          <div className="w-1/4 max-md:hidden bg-white p-4 h-screen sticky top-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Filter</h3>
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-2">Brand</h4>
              
              <ul className="text-sm max-h-[200px] overflow-auto">
                {brands.map(brand => (
                  <li className="flex items-center gap-2" key={brand}>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandToggle(brand)}
                    />
                    {brand}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-2">Price</h4>
              <input
                type="range"
                className="w-full"
                min="2000"
                max="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              />
              <div className="flex justify-between text-sm mt-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <a href={product.url} key={product.url} className="rounded flex flex-col items-start">
                <div className='bg-[#E8F9FF] p-4 py-2 pb-0 rounded-lg w-full'>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full mix-blend-multiply h-auto object-contain mb-4"
                  />
                </div>
                <div className='p-2'>
                  <h3 className="text-sm font-bold">{product.title.split(' ')[0]}</h3>
                  <p className="text-sm text-gray-500">{product.title}</p>
                  <p className="font-bold text-sm text-[#0118D8]">{product.price}</p>
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

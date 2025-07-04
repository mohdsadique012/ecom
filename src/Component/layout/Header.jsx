import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { bagProducts } from '../Data';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
      setShowDropdown(searchTerm.trim().length > 0);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    return bagProducts.filter((product) =>
      product.title.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
  }, [debouncedTerm]);

  const truncate = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  // 📌 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-md w-full z-10 relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <div className="text-xl font-bold text-red-800">
          <a href="/">E-Commerce</a>
        </div>

        <div className="flex items-center w-1/2 relative" ref={searchRef}>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ml-2 p-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition duration-300">
            <AiOutlineSearch />
          </button>

          {/* Filtered Search Result */}
          {debouncedTerm && showDropdown && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md border rounded mt-2 z-20 max-h-[400px] overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center mt-1 px-4 py-10 hover:bg-pink-50 transition"
                    style={{ height: '40px' }}
                  >
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-800 truncate">
                        {product.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {truncate(product.description, 150)}
                      </div>
                    </div>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="ml-4 w-10 h-10 object-cover rounded"
                    />
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-red-500">No products found.</div>
              )}
            </div>
          )}
        </div>

        
      </div>
    </header>
  );
};

export default Header;

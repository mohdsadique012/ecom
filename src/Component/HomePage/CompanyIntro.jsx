import React from 'react';
import bag10 from '../../assets/bags/15/1.jpg';
import bag5 from '../../assets/bags/5/1.jpg';
import bag7 from '../../assets/bags/7/1.jpg'
function CompanyIntro() {
  return (
    <div className="flex max-w-[1200px] mx-auto max-md:pb-0 py-10 md:py-20 flex-col gap-14 md:flex-row items-center justify-between p-6 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl leading-[45px] md:leading-[60px] font-bold mb-4">
        Showcase, Style, <br className='max-md:hidden' />
          <span className="text-pink-600 my-2 leading-10">& Carry Confidence</span> <br />
          with our Bags.
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
        A dynamic platform where craftsmanship meets everyday adventure.
        Our bags are designed to empower creators, travelers, and trendsetters to carry life with style and purpose.
        </p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Shop Now
          </button>
          <a href='/all' className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
          Explore Collection
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full nax-md:overflow-hidden pb-48 flex justify-center items-center relative mt-8 md:mt-0">
        {/* Floating Tags */}
        <div className="absolute -top-10 left-0 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
          @hallstein
        </div>

        {/* Images */}
        <div className="flex gap-4">
          <img
            src={bag10} // Replace with actual image URL
            alt="Art 1"
            className="w-[170px] md:w-[200px] h-auto rounded shadow-lg"
          />
          <img
            src={bag5} // Replace with actual image URL
            alt="Art 2"
            className="w-[170px] md:w-[200px] translate-y-16 -translate-x-28 md:-translate-x-10 h-auto rounded shadow-2xl"
          />
          <img
            src={bag7} // Replace with actual image URL
            alt="Art 3"
            className=" w-[158px] md:w-[200px] h-auto translate-y-40 -translate-x-[14.5rem] md:-translate-x-16 rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyIntro;
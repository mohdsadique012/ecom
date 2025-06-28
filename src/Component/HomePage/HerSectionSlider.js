import React from 'react';

import { FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './style.css'
import HotOffer from './HotOffer';
import {bagProducts} from '../Data/index.js'
function HerSectionSlider() {
   
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Adjust this value to show how many cards you want at once
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        cssEase: "ease-out",
      };
    
  return (
    <div className="flex max-w-[1200px] mx-auto flex-col md:flex-row md:max-h-[400px] gap-6 p-2 max-md:px-2 md:p-6">
      {/* iPhone 13 Pro Section */}
      <div className='md:w-[65%] w-full rounded-lg bg-white shadow-lg overflow-hidden'>
      <div className='w-full h-full overflow-hidden'>
      <Slider {...settings}>
        {bagProducts.slice(0,5).map((product, index) =>{
            return (  
                <div className='h-full w-full' key={index}>
        <div className="flex flex-col md:flex-row px-1 md:px-5 py-0 max-md:pb-10 md:py-10 items-start flex-nowrap relative h-full w-full">
      
        <div className="p-6 flex-1 flex flex-col justify-center">
        <h4 className="text-pink-500 text-sm font-semibold uppercase mb-2">
           - {product.tagline}
          </h4>
          <h2 className="text-2xl font-bold md:mb-4">{product.title}</h2>
          <p className="text-gray-600 line-clamp-2 text-sm mb-1 md:mb-4">
          {product.description}
          </p>
          <h3 className="text-xl font-bold text-black mb-4">{product.price}</h3>
          <a href={product.url} className="bg-blue-500 max-md:text-sm flex items-center justify-center gap-3 w-max text-white px-4 py-2 rounded hover:bg-blue-600">
            Shop Now
            <FaArrowRight className=' text-sm' />
          </a>
        </div>
        
        <div className="flex items-start md:w-[45%]  justify-start">
          <img
            src={product.img}
            alt="iPhone 13 Pro"
            className="w-[320px] max-md:max-h-[150px]  object-contain"
          />
        </div>
      </div>
      </div>
      )
      })}
      </Slider>
      </div>
      </div>

      <div className='flex flex-1'>
        <HotOffer />
      </div>
    </div>
  );
}

export default HerSectionSlider;

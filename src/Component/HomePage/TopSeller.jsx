import React from 'react';
import bag1 from '../../assets/bags/6/1.jpg';
import bag2 from '../../assets/bags/7/1.jpg';
import bag3 from '../../assets/bags/8/1.jpg';
import bag4 from '../../assets/bags/9/1.jpg';
import bag5 from '../../assets/bags/10/1.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { FaAngleRight } from "react-icons/fa6";
function TopSeller() {
const customBagBrands = [
    {
      brandLabel: "URBAN CRAFT",
      brandName: "Handmade with Heart",
      logo: "👜",
      offer: "UP TO 50% OFF",
      image: bag1,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
    },
    {
      brandLabel: "TERRA BAGS",
      brandName: "Eco-Friendly & Durable",
      logo: "🌿",
      offer: "UP TO 60% OFF",
        image: bag2,
        bgColor: "bg-green-100",
      textColor: "text-green-800",
    },
    {
      brandLabel: "NOMAD EDGE",
      brandName: "Crafted for the Wild Soul",
      logo: "🎒",
      offer: "UP TO 55% OFF",
        image: bag3,
        bgColor: "bg-red-100",
        textColor: "text-red-800",
    },
    {
      brandLabel: "MINIMAL & MOD",
      brandName: "Sleek. Clean. Functional.",
      logo: "🧳",
      offer: "UP TO 45% OFF",
        image: bag4,
        bgColor: "bg-blue-100",
        textColor: "text-blue-800",
    },
    {
      brandLabel: "STUDIO CARRY",
      brandName: "Designed by Us, Styled by You",
      logo: "👜",
      offer: "UP TO 65% OFF",
    image: bag5,
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
    }
  ];
const settings = {
         dots: false,
         infinite: false,
         speed: 600,
         slidesToShow: 4, // Default for larger screens
         slidesToScroll: 1,
         cssEase: "ease-out",
         responsive: [
            {
              breakpoint: 1024, // For tablets and smaller desktops
              settings: {
                 slidesToShow: 3,
              },
            },
            {
              breakpoint: 768, // For mobile devices in landscape mode
              settings: {
                 slidesToShow: 2,
              },
            },
            {
              breakpoint: 480, // For mobile devices in portrait mode
              settings: {
                 slidesToShow: 1.2,
              },
            },
         ],
      };
  return (
    <div className="py-10 px-4 max-w-[1200px] mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold max-md:text-lg"> Our Custom Bag Collection</h2>
        <a href="/all" className=" text-sm  ml-5 flex items-center gap-1">
          View_All <FaAngleRight className='text-[#261FB3]' />
        </a>
      </div>

      {/* Brands Section */}
      <div className="w-full overflow-hidden ">
        <Slider {...settings}>
        {customBagBrands.map((brand, index) => (
            <div>
          <div
            key={index}
            className={`flex flex-col min-w-[280px] justify-between rounded-lg shadow-lg p-4 w-64 ${brand.bgColor} ${brand.textColor}`}
          >
            {/* Brand Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold">{brand.brandName}</span>
              <span className="text-sm font-semibold">{brand.logo}</span>
            </div>

            {/* Product Image */}
            <img
              src={brand.image}
              alt={`${brand.name} product`}
              className="w-full h-32 mix-blend-multiply object-contain mb-4"
            />

            {/* Discount */}
            <p className="text-sm font-bold">{brand.offer}</p>
          </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopSeller;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Importing Slick Carousel
import { FaUser } from "react-icons/fa"; // Importing the human icon
import "./testimonials.css"; // Custom CSS for centering dots
import Avtar from "../../assets/bags/avtar.jpg"; // Importing the avatar image
const Testimonys = [
    {
      testimony:
        "I’ve been using this laptop bag for a few months now, and it’s been amazing! It’s spacious, durable, and perfect for my daily work commute. It fits my laptop, charger, and even some extra documents. Highly recommend!",
      client: "Aman Verma",
      designation: "Product Manager, Bengaluru",
    },
    {
      testimony:
        "This laptop bag is both stylish and functional. I love how sleek it looks, and the padding keeps my laptop safe. It’s easy to carry around, and the compartments help me stay organized.",
      client: "Neha Gupta",
      designation: "Graphic Designer, Delhi",
    },
    {
      testimony:
        "The quality of this bag exceeded my expectations. It has enough room for my laptop, tablet, and all the accessories I need. The material is sturdy, and it looks great for both work and travel.",
      client: "Rahul Patel",
      designation: "Software Engineer, Pune",
    },
    {
      testimony:
        "I’ve tried many laptop bags before, but this one is by far the best. It’s comfortable to carry, even with all my gadgets packed inside. Plus, the stylish design makes it perfect for meetings.",
      client: "Ritika Sharma",
      designation: "Marketing Specialist, Chennai",
    },
    {
      testimony:
        "I needed a bag that could handle my laptop and other essentials without being bulky. This one fits the bill perfectly! It’s sleek, has great storage, and I love the professional look.",
      client: "Karan Mehra",
      designation: "Business Analyst, Mumbai",
    },
  ];
  

const carouselOptions = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000, 
  centerMode: true, 
  focusOnSelect: true, 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Testimonials() {
  return (
    <div className="relative w-full sm:bg-red-50 py-12 sm:pb-24 sm:mt-10 sm:pt-12">
      <div className="max-w-[1200px] mx-auto px-4 max-md:hidden">
        <h4 className="text-[38px] leading-[60px] text-center font-medium text-[#000000]">
          Client Testimonials
        </h4>

        {/* SlickCarousel Container */}
        <div className="w-full relative ">
        <Slider {...carouselOptions}>
            {Testimonys.map((testimonial, index) => (
              <div
                key={index}
                className="bg-transparent px-12  flex flex-col justify-between rounded-lg my-10 p-6 text-start h-[370px] sm:h-[170px] mx-2"
              >
                <blockquote className="text-[17px] max-md:text-[15px] max-md:leading-[23px] font-light text-gray-700">
                  “{testimonial.testimony}”
                </blockquote>
                <div className="mt-6 w-full item-center flex gap-4">
                  <div className="w-16 h-16 rounded-full max-md:hidden">
                    <img  src={Avtar} className="rounded-full w-16 h-16"/>
                  </div>
                  <div>
                    <h4 className="text-[14px] mt-3 leading-[19px] items-start tracking-[.68px] font-bold text-[#000000]">
                      {testimonial.client}
                    </h4>
                    <p className="text-[14px] max-md:w-full flex max-md:flex-col items-center max-md:items-start justify-start w-full leading-[28px] gap-2 text-[#656565]">
                      <span>{testimonial.designation}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

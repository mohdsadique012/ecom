import React from 'react';
import Slider from 'react-slick';
import AttractiveCard from '../Cards/AttractiveCard'; // Ensure the path is correct
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Image1 from "../../assets/bags/7/IMG_3113.jpg";
import Image2 from "../../assets/bags/14/IMG_3252.jpg";
import Image3 from "../../assets/bags/20/IMG_3327.jpg";
import Image4 from "../../assets/bags/5/1.jpg";
import DesignCard from '../Cards/DesignCard';
const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 cards on tablets
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 cards on mobile landscape
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 card on mobile portrait
        }
      }
    ]
  };
  const data = [
    {
      title: "Leather Tote Bag - Brown",
      image: Image1,
      date: "January 15, 2025",
      descriptions: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "100% Genuine Leather", description: "with reinforced stitching" },
        { value: "2 spacious compartments", description: "with zippered pockets" },
      ],
    },
    {
      title: "Stylish Backpack - Black",
      image: Image2,
      date: "January 15, 2025",
      descriptions: "A sleek and lightweight backpack, perfect for daily use and travel, with ample storage and a modern design.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "Lightweight design", description: "ideal for daily use" },
        { value: "Fits 15-inch laptops", description: "with padded compartments" },
      ],
    },
    {
      title: "Crossbody Sling Bag - Blue",
      image: Image3,
      date: "January 15, 2025",
      descriptions: "This stylish crossbody sling bag combines practicality and comfort, making it perfect for carrying essentials on the go.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "Adjustable strap", description: "for comfortable wear" },
        { value: "Water-resistant material", description: "keeps belongings safe" },
      ],
    },
    {
      title: "Classic Duffel Bag - Grey",
      image: Image4,
      date: "January 15, 2025",
      descriptions: "A durable and spacious duffel bag, ideal for short trips or gym sessions, designed with practicality in mind.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "35L capacity", description: "perfect for short trips" },
        { value: "Durable polyester", description: "with reinforced handles" },
      ],
    },
    {
      title: "Travel Backpack - Red",
      image: Image1,
      date: "January 15, 2025",
      descriptions: "A versatile travel backpack featuring multiple compartments for organized packing and a comfortable ergonomic design.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "Multiple compartments", description: "for organized packing" },
        { value: "Ergonomic design", description: "with padded straps" },
      ],
    },
    {
      title: "Vintage Messenger Bag - Tan",
      image: Image4,
      date: "January 15, 2025",
      descriptions: "A vintage-style messenger bag made from premium canvas and leather accents, perfect for carrying documents and daily essentials.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "Premium canvas material", description: "with leather accents" },
        { value: "Large main compartment", description: "fits A4 documents" },
      ],
    },
    {
      title: "Compact Sling Bag - Olive",
      image: Image2,
      date: "January 15, 2025",
      descriptions: "A compact and lightweight sling bag designed for everyday essentials, offering both convenience and style.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "Compact and lightweight", description: "for everyday essentials" },
        { value: "Secure zip closures", description: "to keep items safe" },
      ],
    },
    {
      title: "Utility Backpack - Navy",
      image: Image1,
      date: "January 15, 2025",
      descriptions: "A utility-focused backpack with a 25L capacity and waterproof exterior, perfect for daily commutes or weekend adventures.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "25L capacity", description: "ideal for daily use" },
        { value: "Waterproof exterior", description: "protects belongings" },
      ],
    },
    {
      title: "Oversized Tote Bag - Black",
      image: Image4,
      date: "January 15, 2025",
      descriptions: "An oversized tote bag with a spacious interior and organizer pockets, combining style and functionality for various occasions.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "Spacious interior", description: "with organizer pockets" },
        { value: "Stylish and versatile", description: "for work and travel" },
      ],
    },
    {
      title: "Weekender Bag - Charcoal",
      image: Image3,
      date: "January 15, 2025",
      descriptions: "A roomy weekender bag with a 50L capacity, perfect for extended trips, featuring durable zippers and sturdy shoulder straps.",
      fe: "A classic leather tote bag crafted from 100% genuine leather, designed for durability and style. Ideal for work or casual outings.",

      link: "#",
      metrics: [
        { value: "50L capacity", description: "for extended trips" },
        { value: "Durable zippers", description: "with sturdy shoulder straps" },
      ],
    },
  ];
  
  
  return (
    <div className='w-full bg-white px-4 md:px-20 flex flex-col'>
    <DesignCard data={data} />
    </div>
  );
};

export default Trending;

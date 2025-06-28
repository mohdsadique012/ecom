import React from 'react';
import TrendingCards from '../Cards/TrendingCards';

const OfferSection = () => {
  return (
    <div
      className="p-6 md:p-10 my-6 md:my-10 w-full md:w-auto bg-white rounded-2xl mx-4 md:mx-20 flex flex-col md:flex-row items-center justify-center gap-5"
    >
      <TrendingCards />
      <TrendingCards />
      <TrendingCards />
      <TrendingCards />
    </div>
  );
};

export default OfferSection;

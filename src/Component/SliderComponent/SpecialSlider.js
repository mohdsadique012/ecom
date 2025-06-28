import React from 'react'
import TrendingCards from '../Cards/TrendingCards'
const SpecialSlider = () => {
  return (
    <div

      className="carousel-container pl-1 pb-10 flex justify-center gap-5 flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <TrendingCards />
      <TrendingCards />

      <TrendingCards />

      <TrendingCards />



    </div>

  )
}

export default SpecialSlider

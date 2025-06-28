import React from 'react';
import HeroRightBox from './HeroRight';
import HerSectionSlider from './HerSectionSlider';
const Herosection = () => {
  return (
    <div className="w-full bg-[#FBE4D6]">
      {/* <div
        className="w-full h-full flex items-center justify-center md:justify-start"
        style={{
          backgroundImage: "url('https://watermark.lovepik.com/photo/20211118/large/lovepik-e-commerce-merchandise-womens-bag-shooting-picture_500124773.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HeroRightBox />
      </div> */}
      <HerSectionSlider />
    </div>
  );
};

export default Herosection;

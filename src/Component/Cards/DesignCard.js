import React from "react";
import CaseBox from "./CaseCard";


const DesignCard = ({ data }) => {
  console.log(data.fe,"......");
  
  return (
    <div className="bg-[#fcfcfc]">
      <h2 className={`text-[30px] max-md:text-[24px] max-md:leading-[32px] leading-[38px] text-center pt-16 font-light `}>
        Our Proven Success Stories
      </h2>
      <div className="flex flex-wrap gap-10 max-md:gap-8 mt-10 justify-start w-full">
        {data.map((industry, index) => (
          <CaseBox
            key={industry.title}
            title={industry.title}
            url={industry.image}
            number={index}
            metrics={industry.metrics}
            img={industry.image}
            dis={industry.title}
            discription={industry.fe}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignCard;

import React from "react";

const truncateText = (text, charLimit) => {
  if (!text) return ""; // Return an empty string if text is undefined or null
  return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
};

const CaseCard = ({ title, img, url, metrics, description }) => {
  const truncateddescription = truncateText(description, 60); // Limit to 60 characters
console.log(description,"description")
  return (
    <div className="shadow-lg w-[240px] h-[400px] group overflow-hidden rounded-sm hover:scale-[1.03] transition-transform ease-out duration-700 hover:shadow-xl relative">
      {/* Background Image */}
      <div className="relative w-full h-full">
        <img
          src={img}
          loading="lazy"
          width={500}
          height={500}
          alt={title}
          className="rounded-sm w-full h-[60%] object-cover transition-all ease-out duration-700 group-hover:h-full group-hover:blur-[45%]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-[#efefece0] group-hover:backdrop-blur-sm transition-colors ease-out duration-700"></div>
      </div>

      {/* Content Section */}
      <div
        className={`absolute left-0 w-full p-4 text-black group-hover:text-black transition-all ease-out duration-700 flex flex-col gap-2 ${
          "bottom-0 h-[40%] bg-[#FCFCFC] group-hover:top-0 group-hover:h-full group-hover:bg-transparent"
        }`}
      >
        <span className="text-sm font-medium">{title}</span>
        <p className="text-sm">{truncateddescription}</p>
        {metrics && (
          <div className="flex flex-col opacity-0 group-hover:opacity-100 mt-10">
            {metrics.map((metric, i) => (
              <div key={i} className="text-start text-black mb-2">
                <span className="font-bold text-lg">{metric.value}</span>
                <p className="text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Date Section */}
      <div
        className={`absolute bottom-5 left-4 text-[#656565] gap-1 text-[13px] leading-[16px] flex items-start`}
      >
        <span>November 4, 2024</span>
      </div>
    </div>
  );
};

export default CaseCard;


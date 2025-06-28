import React from 'react';

const ShimmerBlock = ({ height = 'h-4', width = 'w-full', rounded = 'rounded-md' }) => (
  <div className={`bg-gray-300 ${height} ${width} ${rounded} animate-pulse`}></div>
);

const HomeShimmer = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-12">
      {/* Hero Section Shimmer */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-[65%] w-full bg-white p-6 rounded-lg shadow-md space-y-4">
          <ShimmerBlock height="h-5" width="w-1/4" />
          <ShimmerBlock height="h-6" width="w-2/3" />
          <ShimmerBlock height="h-4" width="w-full" />
          <ShimmerBlock height="h-6" width="w-1/5" />
          <ShimmerBlock height="h-[200px]" width="w-full" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <ShimmerBlock height="h-[120px]" />
          <ShimmerBlock height="h-[120px]" />
        </div>
      </div>

      {/* New Arrivals Shimmer */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <ShimmerBlock height="h-6" width="w-1/3" />
          <ShimmerBlock height="h-6" width="w-1/6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-blue-50 p-4 rounded-lg shadow space-y-3">
              <div className="flex justify-between">
                <ShimmerBlock height="h-4" width="w-1/4" />
                <ShimmerBlock height="h-4" width="w-1/4" />
              </div>
              <ShimmerBlock height="h-[200px]" />
              <ShimmerBlock height="h-4" width="w-3/4" />
              <ShimmerBlock height="h-4" width="w-1/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeShimmer;

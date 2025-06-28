import React, { Suspense, lazy } from 'react';
import HomeShimmer from '../shimmer/HomeShimmer';

// Lazy load all components including Herosection
const Herosection = lazy(() => import('./Herosection'));
const TopSeller = lazy(() => import('./TopSeller'));
const FeaturedCard = lazy(() => import('./FeaturedCard'));
const NewStock = lazy(() => import('./NewStock'));

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={<div><HomeShimmer /></div>}>
        <Herosection />
      </Suspense>

      <Suspense fallback={<div>Loading Top Seller...</div>}>
        <TopSeller />
      </Suspense>

      <Suspense fallback={<div>Loading Featured Cards...</div>}>
        <FeaturedCard />
      </Suspense>

      <Suspense fallback={<div>Loading New Stock...</div>}>
        <NewStock />
      </Suspense>
    </div>
  );
};

export default HomePage;

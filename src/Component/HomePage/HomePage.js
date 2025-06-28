import React from 'react'
import Herosection from './Herosection'
// import OfferSection from './OfferSection'
// import Trending from './Trending'

import TopSeller from './TopSeller'
import FeaturedCard from './FeaturedCard'
import CompanyIntro from './CompanyIntro'
import NewStock from './NewStock'
const HomePage = () => {
  return (
    <div>
      <Herosection />
      {/* <OfferSection /> */}
      <TopSeller />
      {/* <Trending /> */}
      <FeaturedCard />
      <CompanyIntro />
      {/* <Latest /> */}
      {/* <CompanyDescription /> */}
      {/* <NewArrival /> */}
      <NewStock />
    </div>
  )
}

export default HomePage

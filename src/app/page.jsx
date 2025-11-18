'use client'

import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Hero from './components/Hero'

import ShopNow from './components/ShopNow'
import Intruducing from './components/Intruducing'
import SpecialDeal from './components/SpecialDeal'
import FeaturedProducts from './components/FeaturedProducts'
import Clients from './components/clients'
import LatestNews from './components/LatestNews'



const page = () => {
  return (
    <>
    <Banner/>
    <Hero/>
 <Intruducing/>
    <ShopNow/>
    <SpecialDeal/>
    <FeaturedProducts/>
    <Clients/>
    <LatestNews/>
  

    
    
    
    
    </>
  )
}

export default page
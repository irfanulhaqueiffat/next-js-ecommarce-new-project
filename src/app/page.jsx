'use client'

import React from 'react'
import Banner from './components/Banner'
import Hero from './components/Hero'

import ShopNow from './components/ShopNow'
import Intruducing from './components/Intruducing'
import SpecialDeal from './components/SpecialDeal'
import FeaturedProducts from './components/FeaturedProducts'
import Clients from './components/clients'
import LatestNews from './components/LatestNews'
import FooterHead from './components/FooterHead'


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
    <FooterHead/>
  

    
    
    
    
    </>
  )
}

export default page
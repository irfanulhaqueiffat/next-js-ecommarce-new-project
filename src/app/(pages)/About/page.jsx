import Link from 'next/link'
import React from 'react'
import { FaHome } from "react-icons/fa";
import Image from 'next/image';
import pic1 from '../../../../public/images/About Us.png'
import pic2 from '../../../../public/images/About ME.png'
import AboutDeliver from '@/app/components/Aboutdeliver';
import AboutUs from '@/app/components/Aboutus';

const page = () => {
  return (
    <>
    <section id='about'> 
           <div className=" breadcrumbs flex items-center text-sm py-12 text-gray-600 mt-6 ml-8 space-x-2">
  <Link href="/" className="flex items-center text-gray-500 hover:text-green-600 transition">
    <FaHome className="mr-1 ml-[300px]" />
    Home
  </Link>
  <span className="text-gray-400">/</span>
  <Link href="/About" className="text-gray-500 hover:text-green-600 transition">
    About
  </Link>

</div>
<AboutUs/>
  <AboutDeliver/>






    


    </section>
    
    
    
    
    
    
    </>
  )
}

export default page
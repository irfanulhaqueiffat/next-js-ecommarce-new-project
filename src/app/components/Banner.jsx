import React from 'react'
import Image from 'next/image'
import stimg from '../../../public/images/Group 27.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import Hero from './Hero';

const Banner = () => {
  return (
    <>
    <section id='banner'>
<div className="container">


<div className="banner-content flex justify-between items-center">
<div className="banner-img">
    <Image src={stimg} width={795} height={594}/>
</div>
<div className="contant-part ">
    <p className='text-sm text-green-500 font-normal mb-2'>
        Welcome to shopery
    </p>
    <h1 className='w-[536px] text-[56px] text-black font-semibold pb-5'>Fresh & Healthy
Organic Food</h1>
<p className='text-sm text-black font-normal mb-8'>
    Free shipping on all your order. we deliver, you enjoy
</p>

<button className='py-3 px-6 bg-green-500 rounded-4xl gap-2 flex items-center text-white'>Shop now <span><FaLongArrowAltRight /></span></button>
</div>

</div>












        </div>
    </section>
    
    
    </>
  )
}

export default Banner
import React from 'react'
import image from '../../../public/images/Products(1).png'
import Image from 'next/image'

const Intruducing = () => {
  return (
    <>
    <section id='intruduce' className='bg-[#EDF2EE] py-25'>
        <div className="container mx-auto ">
            <h1 className=' flex m-auto justify-center items-center text-md font-bold text-4xl'>Introducing Our Products</h1>
            <div className='flex justify-center items-center gap-[10px] mb-15 mt-[30px]'>
                <p   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >All</p>
                <span   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >|</span>
                <p   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >Vegetable</p>
                <span   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >|</span>
                <p   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >Fruit</p>
                <span   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >|</span>
                <p   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >Meat & Fish</p>
                <span   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >|</span>
                <p   className='text-[#808080] text-sm font-normal hover:text-[#20B526]'  >View All</p>
            </div>
          

            <Image className='flex justify-center m-auto mb-25 ' src={image} width={800} height={500}  />

        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Intruducing
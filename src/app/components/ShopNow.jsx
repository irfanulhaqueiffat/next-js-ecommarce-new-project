import React from 'react'
import Image from 'next/image'
import shp1 from '../../../public/images/shopNow1.png'
import shp2 from '../../../public/images/shopNow2.png'
import shp3 from '../../../public/images/shopNow3.png'

const ShopNow = () => {
  return (
    <>
    <section id='shopNow' className='mt-52'>
        <div className="container">
            <div className=' flex gap-6 m-25'>
                <Image src={shp1} width={424} height={225}/>
                <Image src={shp2} width={424} height={225}/>
                <Image src={shp3} width={424} height={225}/>

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default ShopNow
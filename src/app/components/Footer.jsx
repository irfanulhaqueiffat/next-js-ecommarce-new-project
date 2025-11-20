import React from "react";
import Image from "next/image";
import Img1 from '../../../public/images/insta1.png'
import Img2 from '../../../public/images/insta2.png'
import Img3 from '../../../public/images/insta3.png'
import Img4 from '../../../public/images/insta4.png'
import Img5 from '../../../public/images/insta5.png'
import Img6 from '../../../public/images/insta6.png'
import Img7 from '../../../public/images/insta7.png'
import Img8 from '../../../public/images/insta8.png'
import applpay from '../../../public/images/ApplePay.png'
import visa from '../../../public/images/Method=Visa.png'
import mastercard from '../../../public/images/Method=Mastercard.png'
import discover from '../../../public/images/Discover.png'
import Payment from '../../../public/images/Cart.png'

const Footer = () => {
  return (
    <footer className="bg-[#02240c] text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About Shopery</h3>
          <p className="text-sm leading-6 opacity-80 mb-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
            eget bibendum magna congue nec.
          </p>

          <p className="text-sm opacity-80">
            (219) 555-0114 or{" "}
            <span className="underline cursor-pointer">Proxy@gmail.com</span>
          </p>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-xl font-semibold mb-3">My Account</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Settings</li>
          </ul>
        </div>

        {/* Helps */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Helps</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <li>Contact</li>
            <li>Faqs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Proxy */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Proxy</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Products Details</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Instagram images */}
        {/* Instagram images */}
<div>
  <h3 className="text-xl font-semibold mb-3">Instagram</h3>
  <div className="grid grid-cols-4 gap-2">

    {/* 1 */}
     <Image 
   src={Img1}
   className="w-full h-16 object-cover rounded-md"
      alt="insta1"/>

    {/* 2 */}
   <Image 
   src={Img2}
   className="w-full h-16 object-cover rounded-md"
      alt="insta1"/>

    {/* 3 */}
      <Image 
   src={Img3}
   className="w-full h-16 object-cover rounded-md"
      alt="insta1"/>

    {/* 4 */}
    <Image 
   src={Img4}
   className="w-full h-16 object-cover rounded-md"
      alt="insta1"/>

    {/* 5 */}
     <Image 
   src={Img5}
   className="w-full h-16 object-cover rounded-md"
      alt="insta1"/>

    {/* 6 */}
      <Image 
   src={Img6}
   className="w-full h-16 object-cover rounded-md"
      alt="insta1"/>
    {/* 7 */}
      <Image 
   src={Img7}
   className="w-full h-16 object-cover rounded-md"
      alt="insta1"/>

    {/* 8 */}
    <Image 
   src={Img8}
   className="w-full h-16 object-cover rounded-md"
      alt="insta1"/>
   

  </div>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

      
          <p className="text-sm opacity-80 mt-4 md:mt-0">
          Shopery eCommerce © 2021. All Rights Reserved
        </p>

        <div className="flex space-x-3 mt-4 md:mt-0">
          <Image src={applpay} alt="applpay" height={30} width={40} />
          <Image src={visa} alt="visa"  height={30} width={30}/>
          <Image src={mastercard} alt="mastercard" height={30} width={30} />
          <Image src={discover} alt="discover"  height={30} width={30}/>
          <Image src={Payment} alt="payment" height={30} width={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import farmerImg from "../../../public/images/abouttrust.png"; // your uploaded image
import ico1 from '../../../public/images/Icon.png'
import ico2 from '../../../public/images/Icon(1).png'
import ico3 from '../../../public/images/Icon(2).png'
import ico4 from '../../../public/images/Icon(3).png'
import ico5 from '../../../public/images/Icon(4).png'
import ico6 from '../../../public/images/Icon(5).png'

const AboutTrust = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <Image
              src={farmerImg}
              alt="Farmer"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">

            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              100% Trusted <br /> Organic Food Store
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a mi.
              Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            {/* FEATURE LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                  <Image 
                  src={ico1}
                  alt="con1"
                  width={75}
                  height={75}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">100% Organic food</h4>
                  <p className="text-sm text-gray-600">100% healthy & Fresh food.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
               <Image 
                  src={ico2}
                  alt="con1"
                  width={75}
                  height={75}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">Great Support 24/7</h4>
                  <p className="text-sm text-gray-600">Instant access to Contact</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                   <Image 
                  src={ico3}
                  alt="con1"
                  width={75}
                  height={75}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">Customer Feedback</h4>
                  <p className="text-sm text-gray-600">Our happy customer</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                  <Image 
                  src={ico4}
                  alt="con1"
                  width={75}
                  height={75}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">100% Secure Payment</h4>
                  <p className="text-sm text-gray-600">We ensure your money is safe</p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                  <Image 
                  src={ico5}
                  alt="con1"
                  width={75}
                  height={75}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">Free Shipping</h4>
                  <p className="text-sm text-gray-600">Free shipping with discount</p>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                  <Image 
                  src={ico6}
                  alt="con1"
                  width={75}
                  height={75}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">100% Organic Food</h4>
                  <p className="text-sm text-gray-600">100% healthy & Fresh food.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTrust;

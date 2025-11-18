'use client'
import React from "react";
import { FaTruck, FaHeadphones, FaLock, FaUndo } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4">

        {/* BOX 1 */}
        <div className="group flex flex-col items-center justify-center p-8 border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-green-500 cursor-pointer">
          <div className="text-4xl text-green-600 mb-3 group-hover:text-white">
            <FaTruck />
          </div>
          <h2 className="font-semibold text-lg group-hover:text-white">Free Shipping</h2>
          <p className="text-sm mt-1 group-hover:text-white">Free shipping with discount</p>
        </div>

        {/* BOX 2 */}
        <div className="group flex flex-col items-center justify-center p-8 border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-green-500 cursor-pointer">
          <div className="text-4xl text-green-600 mb-3 group-hover:text-white">
            <FaHeadphones />
          </div>
          <h2 className="font-semibold text-lg group-hover:text-white">Great Support 24/7</h2>
          <p className="text-sm mt-1 group-hover:text-white">Instant access to Contact</p>
        </div>

        {/* BOX 3 */}
        <div className="group flex flex-col items-center justify-center p-8 border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-green-500 cursor-pointer">
          <div className="text-4xl text-green-600 mb-3 group-hover:text-white">
            <FaLock />
          </div>
          <h2 className="font-semibold text-lg group-hover:text-white">100% Secure Payment</h2>
          <p className="text-sm mt-1 group-hover:text-white">We ensure your money is save</p>
        </div>

        {/* BOX 4 */}
        <div className="group flex flex-col items-center justify-center p-8 border  transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-green-500 cursor-pointer">
          <div className="text-4xl text-green-600 mb-3 group-hover:text-white">
            <FaUndo />
          </div>
          <h2 className="font-semibold text-lg group-hover:text-white">Money-Back Guarantee</h2>
          <p className="text-sm mt-1 group-hover:text-white">30 days money-back guarantee</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;

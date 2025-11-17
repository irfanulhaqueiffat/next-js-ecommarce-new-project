import React from "react";
import { FaTruck, FaHeadphones, FaLock, FaUndo } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4">

        {/* BOX 1 - GREEN ACTIVE */}
        <div  className="flex flex-col items-center justify-center p-8 border 
                        transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-green-500 cursor-pointer">
          <div className="text-4xl text-green-600 mb-3 hover:text-white">
            <FaTruck />
          </div>
          <h2 className="font-semibold text-lg">Free Shipping</h2>
          <p className="text-sm mt-1 opacity-90">
            Free shipping with discount
          </p>
        </div>

        {/* BOX 2 */}
        <div className="flex flex-col items-center justify-center p-8 border 
                        transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-green-500 cursor-pointer">
          <div className="text-4xl text-green-600 mb-3 hover:text-white">
            <FaHeadphones />
          </div>
          <h2 className="font-semibold text-lg text-gray-800">Great Support 24/7</h2>
          <p className="text-sm text-gray-500 mt-1">Instant access to Contact</p>
        </div>

        {/* BOX 3 */}
        <div  className="flex flex-col items-center justify-center p-8 border 
                        transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-green-500 cursor-pointer">
          <div className="text-4xl text-green-600 mb-3 hover:text-white">
            <FaLock />
          </div>
          <h2 className="font-semibold text-lg text-gray-800">100% Secure Payment</h2>
          <p className="text-sm text-gray-500 mt-1">We ensure your money is save</p>
        </div>

        {/* BOX 4 */}
        <div  className="flex flex-col items-center justify-center p-8 border 
                        transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-green-500 cursor-pointer">
          <div className="text-4xl text-green-600 mb-3 hover:text-white">
            <FaUndo />
          </div>
          <h2 className="font-semibold text-lg text-gray-800">Money-Back Guarantee</h2>
          <p className="text-sm text-gray-500 mt-1">30 days money-back guarantee</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;

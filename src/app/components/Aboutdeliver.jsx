import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import deliveryImg  from '../../../public/images/deliver.png'; // Replace with your actual image import

const AboutDeliver = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            We Delivered, You <br /> Enjoy Your Order.
          </h2>
          <p className="text-gray-500">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin
            dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
            bibendum nunc eget elementum.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Sed in metus pellentesque.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Maecenas ut nunc fringilla erat varius.
            </li>
          </ul>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition">
            <span>Shop Now</span>
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ deliveryImg}
            alt="Delivery person with groceries"
            className="max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDeliver;

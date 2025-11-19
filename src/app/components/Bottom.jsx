import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Bottom = () => {
  return (
    <>
      <div id="Bottom" className="w-full h-[135px] bg-[#EDF2EE] flex items-center">
        <div className="container mx-auto">
          <div className="bottomsItems flex justify-between items-center">

            {/* LEFT MENU AREA */}
            <div className="menuItems flex items-center gap-6">
              
              {/* ALL CATEGORY BUTTON */}
              <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer">
                <FaBars className="text-white text-lg" />
                <select className="bg-transparent outline-none text-white text-sm cursor-pointer">
                  <option>All Categories</option>
                  <option>Home</option>
                  <option>Shop</option>
                  <option>Pages</option>
                  <option>Blog</option>
                </select>
              </div>

              {/* SMALLER SELECT MENUS */}
              <select className="bg-transparent border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 cursor-pointer">
                <option>Home</option>
                <option>Home 1</option>
                <option>Home 2</option>
              </select>

              <select className="bg-transparent border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 cursor-pointer">
                <option>Shop</option>
                <option>Home 1</option>
                <option>Home 2</option>
              </select>

              <select className="bg-transparent border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 cursor-pointer">
                <option>Pages</option>
                <option>Home 1</option>
                <option>Home 2</option>
              </select>

              <select className="bg-transparent border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 cursor-pointer">
                <option>Blog</option>
                <option>Home 1</option>
                <option>Home 2</option>
              </select>

              {/* NORMAL MENU ITEMS */}
              <p className="text-gray-800 cursor-pointer text-sm"><Link href='/About'>About us</Link></p>
              <p className="text-gray-800 cursor-pointer text-sm">Contact</p>
            </div>

            {/* RIGHT CONTACT AREA */}
            <div className="contact flex items-center gap-2">
              <FaPhoneAlt className="text-green-700" />
              <span className="text-gray-800 font-medium">+8801819575439</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;

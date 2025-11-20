'use client'

import Link from "next/link";
import { FaHome, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="py-10 bg-white">

        {/* Breadcrumb */}
        <div className="breadcrumbs flex items-center text-sm py-12 text-gray-600 mt-6 ml-8 space-x-2">
          <Link href="/" className="flex items-center text-gray-500 hover:text-green-600 transition">
            <FaHome className="mr-1 ml-[300px]" />
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/Contact" className="text-gray-500 hover:text-green-600 transition">
            Contact
          </Link>
        </div>

        <div className="container mx-auto px-4">

          <div className="bg-white shadow-md rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT INFO CARD */}
            <div className="bg-white rounded-xl shadow-md p-8 space-y-8 border">

              {/* Address */}
              <div className="text-center">
                <div className="text-green-600 text-4xl mx-auto mb-3 items-center justify-center flex">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-gray-600">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
              </div>

              <hr />

              {/* Email */}
              <div className="text-center">
                <div className="text-green-600 text-4xl mx-auto mb-3 items-center justify-center flex">
                  <FaEnvelope />
                </div>
                <p className="text-gray-600">Proxy@gmail.com</p>
                <p className="text-gray-600">Help.proxy@gmail.com</p>
              </div>

              <hr />

              {/* Phone */}
              <div className="text-center">
                <div className="text-green-600 text-4xl mx-auto mb-3 items-center justify-center flex">
                  <FaPhoneAlt />
                </div>
                <p className="text-gray-600">(219) 555-0114</p>
                <p className="text-gray-600">(164) 333-0487</p>
              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Just Say Hello!</h2>
              <p className="text-gray-600 mb-6">
                Do you fancy saying hi to me or do you want to get started with your
                project and you need my help? Feel free to contact me.
              </p>

              {/* FORM */}
              <form className="space-y-5">

                {/* Name / Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Template Cookie"
                    className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="zakirsoft@gmail.com"
                    className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>

                {/* Message */}
                <input
                  type="text"
                  placeholder="Hello!"
                  className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Subjects"
                  className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />

                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-green-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>



        </div>
                  {/* MAP IMAGE — From your upload */}
          
<div className="mt-10 w-full h-[450px] rounded-xl overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1763620095573!5m2!1sen!2sbd" 
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      </section>
    </>
  );
};

export default page;

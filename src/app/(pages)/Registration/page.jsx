'use client';

import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const RegisterPage = () => {
  return (
    <section>
      {/* Breadcrumb */}
      <div className="breadcrumbs flex items-center text-sm py-12 text-gray-600 mt-6 ml-8 space-x-2">
        <Link href="/" className="flex items-center text-gray-500 hover:text-green-600 transition">
          <FaHome className="mr-1 ml-[300px]" />
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <Link href="/" className="text-gray-500 hover:text-green-600 transition">
          Account
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-600 font-medium">Create Account</span>
      </div>

      <div className="container">
        <div className="min-h-screen flex flex-col justify-between bg-white">

          {/* Create Account Card */}
          <div className="flex flex-col items-center justify-center grow">
            <div className="bg-white shadow-md rounded-xl p-10 w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Create Account
              </h2>

              <form className="flex flex-col space-y-4">

                {/* Username Field */}
                <input
                  type="text"
                  placeholder="Username"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Email Field */}
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Password */}
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Confirm Password */}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Accept all terms & Conditions
                </label>

                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition"
                >
                  Create Account
                </button>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/Login" className="text-green-600 font-medium hover:underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* Newsletter Section */}
          <footer className="bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-semibold text-lg mb-2">
                Subscribe our Newsletter
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                Phasellus imperdiet elit eu magna.
              </p>

              <div className="flex justify-center items-center space-x-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
                  Subscribe
                </button>

                <div className="flex justify-center space-x-4 mt-6 text-gray-500">
                  <FaFacebook />
                  <FaTwitter />
                  <FaPinterest />
                  <FaInstagram />
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </section>
  );
};

export default RegisterPage;

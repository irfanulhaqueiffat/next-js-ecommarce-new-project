'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";
import userdash from '../../../../public/images/Ellipse 5(1).png'

const DashboardPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <section>
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
          <span className="text-green-600 font-medium">Dashboard</span>
        </div>
      </section>

      {/* Dashboard Layout */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-12 gap-6  mt-20">

          {/* LEFT SIDEBAR */}
          <aside className="col-span-3 bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>

            <ul className="space-y-4 text-gray-700">
              <li className="font-semibold text-green-600 bg-green-100 p-3 rounded-md">
                Dashboard
              </li>
              <li className="hover:text-green-600 cursor-pointer">Order History</li>
              <li className="hover:text-green-600 cursor-pointer">Wishlist</li>
              <li className="hover:text-green-600 cursor-pointer">Shopping Cart</li>
              <li className="hover:text-green-600 cursor-pointer">Settings</li>
              <li className="hover:text-red-600 cursor-pointer">Log-out</li>
            </ul>
          </aside>

          {/* PROFILE + BILLING + ORDER HISTORY */}
          <main className="col-span-9 space-y-6">

            {/* PROFILE & BILLING CARDS */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* PROFILE CARD */}
              <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
                <Image
                  src={userdash}   // replace with real user image
                  alt="User"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />

                <h2 className="text-xl font-semibold mt-3">Dianne Russell</h2>
                <p className="text-gray-500 text-sm mb-2">Customer</p>
                <button className="text-green-600 hover:underline">Edit Profile</button>
              </div>

              {/* BILLING ADDRESS */}
              <div className="bg-white shadow rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Billing Address</h3>

                <p className="font-semibold">Dianne Russell</p>
                <p className="text-sm text-gray-600">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>

                <p className="text-sm mt-2">dianne.russell@gmail.com</p>
                <p className="text-sm">(671) 555-0110</p>

                <button className="text-green-600 hover:underline text-sm mt-3">
                  Edit Address
                </button>
              </div>

            </div>

            {/* ORDER HISTORY TABLE */}
            <div className="bg-white shadow rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Order History</h3>
                <button className="text-green-600 hover:underline text-sm">View All</button>
              </div>

              <table className="w-full text-left">
                <thead>
                  <tr className="border-b text-sm text-gray-600">
                    <th className="py-2">ORDER ID</th>
                    <th className="py-2">DATE</th>
                    <th className="py-2">TOTAL</th>
                    <th className="py-2">STATUS</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700 text-sm">

                  <tr className="border-b">
                    <td className="py-3">#738</td>
                    <td>8 Sep, 2020</td>
                    <td className="font-semibold">$135.00 (5 Products)</td>
                    <td className="text-green-600 flex justify-between">
                      Processing
                      <span className="cursor-pointer hover:underline">View Details</span>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">#703</td>
                    <td>24 May, 2020</td>
                    <td className="font-semibold">$25.00 (1 Product)</td>
                    <td className="text-green-600 flex justify-between">
                      On the way
                      <span className="cursor-pointer hover:underline">View Details</span>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">#130</td>
                    <td>22 Oct, 2020</td>
                    <td className="font-semibold">$250.00 (4 Products)</td>
                    <td className="text-green-600 flex justify-between">
                      Completed
                      <span className="cursor-pointer hover:underline">View Details</span>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">#561</td>
                    <td>1 Feb, 2020</td>
                    <td className="font-semibold">$35.00 (1 Product)</td>
                    <td className="text-green-600 flex justify-between">
                      Completed
                      <span className="cursor-pointer hover:underline">View Details</span>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">#536</td>
                    <td>21 Sep, 2020</td>
                    <td className="font-semibold">$578.00 (13 Products)</td>
                    <td className="text-green-600 flex justify-between">
                      Completed
                      <span className="cursor-pointer hover:underline">View Details</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3">#492</td>
                    <td>22 Oct, 2020</td>
                    <td className="font-semibold">$345.00 (7 Products)</td>
                    <td className="text-green-600 flex justify-between">
                      Completed
                      <span className="cursor-pointer hover:underline">View Details</span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </main>

        </div>
      </section>
    </>
  );
};

export default DashboardPage;

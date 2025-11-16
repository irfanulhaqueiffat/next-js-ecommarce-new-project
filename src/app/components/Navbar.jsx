"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineMenu, HiOutlineX, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

import logo from "../../../public/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("/");
  const router = useRouter();

  const onSelectChange = (e) => {
    const path = e.target.value;
    setSelected(path);
    if (path) router.push(path);
  };

  return (
<div className="container mx-auto ">
      <div className="flex items-center justify-between py-4
      border border-white rounded-2xl">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Logo" width={161} height={40} />
            </Link>

            <nav className="hidden md:flex gap-4 mt-5 ml-[60px] font-inter text-bold text-[14px] font-bold">
              <Link href="/" className="hover:text-black">Home</Link>
              <Link href="/About" className="hover:text-black">Page</Link>
              <Link href="/Services" className="hover:text-black">Product</Link>
              <Link href="/Contact" className="hover:text-black">Contact</Link>
            </nav>
          </div>

          <div className="flex justify-between gap-3 ">
           <div className="w-10 h-10 border rounded-full flex justify-center"> <Link href="/login" className="hidden sm:inline-flex items-center gap-2 px-3 py-1  hover:bg-gray-100">
              <HiOutlineUser size={18} />
            
            </Link></div>
            <div className="w-10 h-10 border rounded-full flex justify-center">
                
            <Link href="/cart" className="inline-flex items-center gap-2 px-3 py-1  hover:bg-gray-100 rounded-full" aria-label="View cart">
              <HiOutlineShoppingCart size={20} />
              <span className="sr-only">Cart</span>
            </Link>
            </div>


            <div className="md:hidden">
              <label htmlFor="nav-select" className="sr-only">Navigate</label>
              <select id="nav-select" value={selected} onChange={onSelectChange} className="border rounded px-2 py-1" aria-label="Navigate site">
                <option value="/">Home</option>
                <option value="/About">Page</option>
                <option value="/Services">Product</option>
                <option value="/Contact">Contact</option>
              </select>
            </div>
          </div>
        </div>
</div>
  );
}

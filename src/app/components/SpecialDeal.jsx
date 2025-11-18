'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import left from '../../../public/images/left.png'
import right from '../../../public/images/right.png'
const SpecialDeal = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 })

  // Target countdown end time (set any date you want)
  const targetDate = new Date("2025-12-31T23:59:59")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const distance = targetDate - now

      if (distance <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const secs = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hrs, mins, secs })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-10 bg-[#F5F9F5]">
      <div className="container mx-auto px-4 md:px-0 bg-white rounded-xl p-4 md:p-6 lg:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

        {/* Left Image */}
        <div className="relative w-full md:w-1/3 h-48 md:h-72">
          <Image
            src={left}
            alt="Vegetables"
            fill
            className="object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:w-1/3">
          <p className="text-[#20B526] font-semibold uppercase text-sm mb-2">
            Best Deals
          </p>

          <h2 className="text-3xl font-bold text-gray-800 leading-snug mb-5">
            Our Special Products <br /> Deal of the Month
          </h2>

          {/* Countdown */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">

            <div className="text-center bg-[#E7F7EE] rounded-md p-3 min-w-[60px]">
              <p className="text-xl font-bold text-[#20B526]">{String(timeLeft.days).padStart(2, "0")}</p>
              <p className="text-xs text-gray-600">DAYS</p>
            </div>

            <div className="text-center bg-[#E7F7EE] rounded-md p-3 min-w-[60px]">
              <p className="text-xl font-bold text-[#20B526]">{String(timeLeft.hrs).padStart(2, "0")}</p>
              <p className="text-xs text-gray-600">HOURS</p>
            </div>

            <div className="text-center bg-[#E7F7EE] rounded-md p-3 min-w-[60px]">
              <p className="text-xl font-bold text-[#20B526]">{String(timeLeft.mins).padStart(2, "0")}</p>
              <p className="text-xs text-gray-600">MINS</p>
            </div>

            <div className="text-center bg-[#E7F7EE] rounded-md p-3 min-w-[60px]">
              <p className="text-xl font-bold text-[#20B526]">{String(timeLeft.secs).padStart(2, "0")}</p>
              <p className="text-xs text-gray-600">SECS</p>
            </div>

          </div>

          <button className="bg-[#20B526] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1d9f40] transition">
            Shop now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/3 h-48 md:h-72">
          <Image
            src={right}
            alt="Farmer"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default SpecialDeal

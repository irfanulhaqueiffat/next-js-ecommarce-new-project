import React from 'react'
import Image from 'next/image'
import t1 from '../../../public/images/t1.png'
import t2 from '../../../public/images/t2.png'
import t3 from '../../../public/images/t3.png'
import t4 from '../../../public/images/t4.png'



const AbouTteam = () => {
  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">

        {/* ===== Title ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Our Awesome Team
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a mi.
          </p>
        </div>

        {/* ===== Team Section ===== */}
        <div className="relative flex items-center">

          {/* Left Arrow */}
          <button className="absolute left-0 bg-white shadow-md rounded-full p-3 hover:bg-green-500 hover:text-white transition">
            ←
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-12">

            {/* ===== Card 1 ===== */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-56">
                <Image
                  src={t1}
                  alt="Team Member"
                  fill
                  className="object-cover"
                />

                {/* Social Icons on hover */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition">
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    f
                  </a>
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </a>
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    P
                  </a>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">Jenny Wilson</h3>
                <p className="text-gray-500 text-sm">Ceo & Founder</p>
              </div>
            </div>

            {/* ===== Card 2 ===== */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-56">
                <Image
                  src={t2}
                  alt="Team Member"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition">
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    f
                  </a>
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </a>
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    P
                  </a>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">Jane Cooper</h3>
                <p className="text-gray-500 text-sm">Worker</p>
              </div>
            </div>

            {/* ===== Card 3 ===== */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-56">
                <Image
                  src={t3}
                  alt="Team Member"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition">
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    f
                  </a>
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </a>
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    P
                  </a>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">Cody Fisher</h3>
                <p className="text-gray-500 text-sm">Security Guard</p>
              </div>
            </div>

            {/* ===== Card 4 ===== */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-56">
                <Image
                  src={t4}
                  alt="Team Member"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition">
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    f
                  </a>
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </a>
                  <a className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    P
                  </a>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">Robert Fox</h3>
                <p className="text-gray-500 text-sm">Senior Farmer Manager</p>
              </div>
            </div>

          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 bg-white shadow-md rounded-full p-3 hover:bg-green-500 hover:text-white transition">
            →
          </button>

        </div>
      </div>
    </section>
  );
};

export default AbouTteam;

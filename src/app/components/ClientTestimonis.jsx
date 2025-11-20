import React from "react";
import Image from "next/image";

// Using your uploaded image for now
import clientImg from "../../../public/images/c1.png";
import clientImg3 from "../../../public/images/c2.png";
import clientImg2 from "../../../public/images/c3.png";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Customer",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    rating: 5,
    img: clientImg,
  },
  {
    name: "Dianne Russell",
    role: "Customer",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    rating: 5,
    img: clientImg2,
  },
  {
    name: "Eleanor Pena",
    role: "Customer",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    rating: 5,
    img: clientImg3,
  },
];

const ClientTestimonis = () => {
  return (
    <section className="py-16 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Client Testimonail
            </h2>
            
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
              ←
            </button>
            <button className="w-9 h-9 rounded-full bg-[#20B526] text-white shadow-md flex items-center justify-center hover:bg-green-600 transition">
              →
            </button>
          </div>
        </div>

        {/* Colored lines */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-8 h-1 rounded-full bg-[#20B526]" />
          <span className="w-8 h-1 rounded-full bg-[#FF3E8A]" />
          <span className="w-8 h-1 rounded-full bg-[#20B526]" />
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">

              {/* Quote */}
              <div className="text-3xl text-[#20B526] mb-4">“</div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.text}
              </p>

              <div className="flex items-center justify-between">
                
                {/* Avatar + Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1A1A1A]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-[#FFC107] text-sm">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonis;

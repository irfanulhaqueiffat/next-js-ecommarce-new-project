import React from "react";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Curabitur porttitor orci eget neque accumsan venenatis.",
    desc: "Nulla libero lorem, euismod venenatis nibh sed, sodales dictum est. Etiam nisl augue, malesuada et pulvinar at.",
    date: "23",
    month: "JAN",
    image: "/images/news1.png",
  },
  {
    id: 2,
    title: "Curabitur porttitor orci eget neque accumsan venenatis.",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    date: "23",
    month: "JAN",
    image: "/images/news2.png",
  },
  {
    id: 3,
    title: "Curabitur porttitor orci eget neque accumsan venenatis.",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    date: "23",
    month: "JAN",
    image: "/images/news3.png",
  },
]

const LatestNews = () => {
  return (
    <section id="latestnews" className="pt-[250px]">
      <div className="container mx-auto ">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-popins font-semibold text-[40px] text-center">
            Latest News
          </h2>
        </div>

        {/* News Items */}
        <div className="newsItems grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full h-56 mb-4">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="rounded-lg object-cover"
                />

                {/* Date Badge */}
                <div className="absolute top-3 left-3 bg-white shadow-md px-3 py-2 rounded-lg text-center">
                  <p className="text-lg font-bold text-[#20B526] leading-none">{news.date}</p>
                  <p className="text-xs text-gray-500">{news.month}</p>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                {news.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{news.desc}</p>

              {/* Read More */}
              <a
                href="#"
                className="text-[#20B526] text-sm font-medium flex items-center gap-1 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default LatestNews

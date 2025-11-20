'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

// If you actually want to use BlogDetail, you can use it below instead of inline markup
// import BlogDetail from '@/app/components/BlogDetail';

type SingleBlogPageProps = {
  params: {
    id: string;
  };
};

export default function SingleBlogPage({ params }: SingleBlogPageProps) {
  const { id } = params; // dynamic route param: /blogs/[id]

  // TODO: fetch blog by `id` here or inside BlogDetail component
  // const blog = getBlogById(id);

  return (
    <section className="bg-white pb-20">
      {/* Breadcrumb */}
      <div className="breadcrumbs flex items-center text-sm py-10 text-gray-600 mt-6 ml-8 space-x-2">
        <Link href="/" className="flex items-center text-gray-500 hover:text-green-600 transition">
          <FaHome className="mr-1 ml-[300px]" />
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <Link href="/Blogs" className="text-gray-500 hover:text-green-600 transition">
          Blogs
        </Link>
   
      </div>

      {/* Full Layout */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Sidebar */}
        <aside className="space-y-10">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-4 py-3 rounded-lg bg-gray-100 outline-none"
          />

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                Fresh Fruit <span>(134)</span>
              </li>
              <li className="flex justify-between">
                Vegetables <span>(150)</span>
              </li>
              <li className="flex justify-between">
                Cooking <span>(54)</span>
              </li>
              <li className="flex justify-between">
                Snacks <span>(47)</span>
              </li>
              <li className="flex justify-between">
                Beverages <span>(43)</span>
              </li>
              <li className="flex justify-between">
                Beauty &amp; Health <span>(38)</span>
              </li>
              <li className="flex justify-between">
                Bread &amp; Bakery <span>(15)</span>
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Tag</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Healthy',
                'Low fat',
                'Vegetarian',
                'Bread',
                'Kid foods',
                'Vitamins',
                'Snacks',
                'Tiffin',
                'Meat',
                'Launch',
                'Dinner',
              ].map((tag, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                    tag === 'Low fat'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Gallery</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                '/images/filter.png',
                '/images/blog-detail.png',
                '/images/comments.png',
              ].map((img, i) => (
                <div
                  key={i}
                  className="w-full h-20 bg-gray-200 rounded-xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt="gallery"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Blogs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recently Added</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((post) => (
                <div key={post} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-xl" />
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      Curabitur porttitor orci eget neque.
                    </h4>
                    <p className="text-gray-400 text-sm">Apr 25, 2021</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Blog Content */}
        <main className="lg:col-span-2">
          {/* MAIN IMAGE */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/blog-detail.png"
              alt="blog"
              width={900}
              height={500}
              className="w-full rounded-3xl"
            />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-6 text-green-600 text-sm mt-5">
            <span>🍏 Food</span>
            <span>By Admin</span>
            <span>65 Comments</span>
            <span className="ml-auto text-xs text-gray-400">
              ID: {id}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mt-4 mb-5">
            Maecenas tempor urna sed quam mollis, a placerat dui fringilla
            Suspendisse.
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 py-4 border-y my-6">
            <Image
              src="/images/comments.png"
              width={50}
              height={50}
              alt="author"
              className="rounded-full"
            />
            <div>
              <h4 className="font-semibold">Cameron Williamson</h4>
              <p className="text-gray-500 text-sm">
                4 April, 2021 • 6 min read
              </p>
            </div>
            <div className="ml-auto flex gap-4 text-gray-600">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>

          {/* Blog Text */}
          <div className="text-gray-600 leading-7 space-y-6">
            <p>
              Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
              dolor at scelerisque imperdiet.
            </p>
            <p>
              Maecenas elementum in risus sed condimentum. Duis convallis ante
              ac tempus maximus.
            </p>

            {/* Inline images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
              <Image
                src="/images/filter.png"
                width={500}
                height={400}
                className="rounded-xl"
                alt="img"
              />
              <Image
                src="/images/filter.png"
                width={500}
                height={400}
                className="rounded-xl"
                alt="img"
              />
            </div>

            <p>
              Sed dictum non nulla eu imperdiet. Duis elit libero, vehicula quis
              vehicula ut, vestibulum ut mauris.
            </p>
          </div>

          {/* Comment Form */}
          <div className="mt-14">
            <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <textarea
              placeholder="Write your comment here..."
              className="w-full border p-4 rounded-lg h-36"
            />

            <div className="flex items-center gap-2 my-3">
              <input type="checkbox" id="remember" />
              <label
                htmlFor="remember"
                className="text-sm text-gray-500"
              >
                Save my name and email for next time
              </label>
            </div>

            <button className="bg-green-600 text-white px-6 py-3 rounded-full mt-3">
              Post Comments
            </button>
          </div>

          {/* Comments */}
          <div className="mt-10 space-y-8">
            {[1, 2, 3, 4].map((c) => (
              <div key={c} className="border-b pb-4">
                <h4 className="font-semibold">Annette Black</h4>
                <p className="text-gray-500 text-sm">28 Apr, 2021</p>
                <p className="text-gray-600 leading-6 mt-2">
                  In a nisi commodo, porttitor ligula consequat, tincidunt dui.
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 bg-white border px-6 py-3 rounded-full hover:bg-gray-100">
            Load More
          </button>
        </main>
      </div>
    </section>
  );
}

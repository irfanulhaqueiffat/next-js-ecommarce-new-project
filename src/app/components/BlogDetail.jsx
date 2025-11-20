'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaHome,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaUser,
  FaCalendar,
  FaComment,
} from 'react-icons/fa'

const BlogDetail = ({ id }) => {
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const controller = new AbortController()

    const fetchBlogData = async () => {
      try {
        setLoading(true)
        setError(null)

        // 1) Fetch single blog by ID
        const res = await fetch(`/api/blogs/${id}`, { signal: controller.signal })

        if (!res.ok) {
          throw new Error('Failed to fetch blog')
        }

        // Expecting either `{ blog: {...} }` or the blog object itself
        const data = await res.json()
        const blogData = data.blog || data

        if (!blogData) {
          throw new Error('Blog not found')
        }

        setBlog(blogData)

        // 2) Fetch related blogs (simple example: same endpoint, filter by id)
        const relatedRes = await fetch(`/api/blogs?limit=3&exclude=${id}`, {
          signal: controller.signal,
        })

        if (relatedRes.ok) {
          const relatedJson = await relatedRes.json()
          // Expecting either `{ blogs: [...] }` or `[...]`
          const related = relatedJson.blogs || relatedJson || []
          setRelatedBlogs(related.filter((b) => String(b.id) !== String(id)))
        } else {
          // Not critical – just log it
          console.warn('Failed to fetch related blogs')
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err)
          setError(err.message || 'Something went wrong')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchBlogData()

    return () => {
      controller.abort()
    }
  }, [id])

  if (loading) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">Loading blog...</p>
        </div>
      </section>
    )
  }

  if (error || !blog) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-500">{error || 'Blog not found'}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white pb-20">
      {/* Breadcrumb */}
      <div className="breadcrumbs flex items-center text-sm py-10 text-gray-600 mt-7  space-x-2">
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
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2">
          {/* Blog Header Image */}
          <div className="w-full h-96 mb-6 rounded-xl overflow-hidden">
            {/* Using img here is fine if it's a remote URL.
                If you want Next optimization, add the domain in next.config and use <Image /> */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Title and Meta */}
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <FaUser className="text-green-600" />
              <span>By {blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-green-600" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaComment className="text-green-600" />
              <span>{blog.comments} Comments</span>
            </div>
            {blog.category && (
              <div className="px-3 py-1 bg-green-100 text-green-600 rounded">
                {blog.category}
              </div>
            )}
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
          </div>

          {/* Tags */}
          {Array.isArray(blog.tags) && blog.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Share */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-3">Share this blog:</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <FaPinterestP />
              </a>
              <a
                href="#"
                className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="space-y-10">
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
              <li className="flex justify-between hover:text-green-600 cursor-pointer">
                Fresh Fruit <span>(134)</span>
              </li>
              <li className="flex justify-between hover:text-green-600 cursor-pointer">
                Vegetables <span>(150)</span>
              </li>
              <li className="flex justify-between hover:text-green-600 cursor-pointer">
                Cooking <span>(54)</span>
              </li>
              <li className="flex justify-between hover:text-green-600 cursor-pointer">
                Snacks <span>(47)</span>
              </li>
              <li className="flex justify-between hover:text-green-600 cursor-pointer">
                Beverages <span>(43)</span>
              </li>
              <li className="flex justify-between hover:text-green-600 cursor-pointer">
                Beauty &amp; Health <span>(38)</span>
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-3">
              {['Healthy', 'Low fat', 'Vegetarian', 'Bread', 'Kid foods', 'Vitamins', 'Snacks'].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-green-500 hover:text-white bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Related Blogs</h3>
              <div className="space-y-6">
                {relatedBlogs.map((post) => (
                  <Link
                    key={post.id}
                    href={`/SingelBlogs/${post.id}`}
                    className="flex gap-4 hover:opacity-80 transition"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                      <img
                        src={post.thumbnail || post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium hover:text-green-600">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogDetail

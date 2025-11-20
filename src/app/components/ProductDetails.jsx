'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaPlus,
  FaMinus,
  FaHeart,
  FaPlay,
} from 'react-icons/fa'

const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState(null)
  const [mainImage, setMainImage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [qty, setQty] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        if (!res.ok) throw new Error('Failed to fetch product')

        const data = await res.json()
        setProduct(data)
        setMainImage(data.images?.[0] || data.thumbnail || '')
      } catch (err) {
        console.error(err)
        setError('Could not load product.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  // fetch related products (same category) once product is loaded
  useEffect(() => {
    if (!product || !product.category) return

    let cancelled = false

    const fetchRelated = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${encodeURIComponent(product.category)}?limit=8`
        )
        if (!res.ok) throw new Error('Failed to fetch related products')
        const data = await res.json()
        const items = (data.products || []).filter((p) => p.id !== product.id)
        if (!cancelled) setRelated(items)
      } catch (err) {
        console.error('Related fetch error:', err)
      }
    }

    fetchRelated()

    return () => {
      cancelled = true
    }
  }, [product])

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">Loading product details...</p>
        </div>
      </section>
    )
  }

  if (error || !product) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-500">{error || 'Product not found'}</p>
        </div>
      </section>
    )
  }

  const {
    title,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    stock,
    description,
    images = [],
    sku,
  } = product

  const oldPrice =
    discountPercentage && discountPercentage > 0
      ? (price / (1 - discountPercentage / 100)).toFixed(2)
      : null

  const handleDecrease = () => setQty((p) => (p > 1 ? p - 1 : 1))
  const handleIncrease = () => setQty((p) => p + 1)
  const isInStock = stock > 0

  return (
    <section className="py-12 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Images column */}
          <div className="md:col-span-6">
            <div className="w-full bg-white rounded-xl p-4">
              <div className="w-full h-[380px] md:h-[520px] mb-4 relative rounded overflow-hidden">
                {mainImage ? (
                  // use next/image unoptimized for external URLs
                  <Image
                    src={mainImage}
                    alt={title}
                    fill
                    unoptimized
                    className="object-contain rounded"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">No image</div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className="w-20 h-20 shrink-0 rounded overflow-hidden border"
                  >
                    <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details column */}
          <div className="md:col-span-6">
            <div className="bg-white rounded-xl p-6 space-y-4">
              <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center text-yellow-500">
                  <FaStar /> <span className="ml-2 text-sm text-gray-600">{rating}</span>
                </div>
                <div className="text-sm text-gray-500">| {brand}</div>
                <div className={`text-sm font-medium ${isInStock ? 'text-green-600' : 'text-red-500'}`}>
                  {isInStock ? 'In stock' : 'Out of stock'}
                </div>
              </div>

              <div className="flex items-baseline gap-4">
                <div className="text-2xl md:text-3xl font-bold text-[#20B526]">${Number(price).toFixed(2)}</div>
                {oldPrice && <div className="text-sm line-through text-gray-400">${oldPrice}</div>}
                {discountPercentage > 0 && <div className="text-sm text-red-500">-{discountPercentage}%</div>}
              </div>

              <p className="text-sm text-gray-700">{description}</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button onClick={handleDecrease} className="px-3 py-2"><FaMinus /></button>
                  <div className="px-4 py-2">{qty}</div>
                  <button onClick={handleIncrease} className="px-3 py-2"><FaPlus /></button>
                </div>

                <button className="px-4 py-2 bg-[#20B526] text-white rounded hover:bg-[#17941E]">Add to cart</button>
                <button className="px-3 py-2 border rounded flex items-center gap-2"><FaHeart /> Wishlist</button>
              </div>

              <div className="flex items-center gap-3">
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebookF /></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaTwitter /></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaPinterestP /></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram /></a>
              </div>

              {/* Tabs */}
              <div className="pt-4">
                <div className="flex gap-4 border-b">
                  <button onClick={() => setActiveTab('description')} className={`pb-2 ${activeTab === 'description' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-600'}`}>Description</button>
                  <button onClick={() => setActiveTab('specs')} className={`pb-2 ${activeTab === 'specs' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-600'}`}>Specifications</button>
                </div>

                <div className="pt-4">
                  {activeTab === 'description' && <p className="text-sm text-gray-700">{description}</p>}
                  {activeTab === 'specs' && (
                    <div className="text-sm text-gray-700">
                      <p><strong>Category:</strong> {category}</p>
                      <p><strong>Brand:</strong> {brand}</p>
                      <p><strong>SKU:</strong> {sku || 'N/A'}</p>
                      <p><strong>Stock:</strong> {stock}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

        {related && related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.id} href={`/SingelProducts/${p.id}`} className="block bg-white rounded p-3 hover:shadow">
                  <div className="w-full h-40 mb-2 overflow-hidden rounded">
                    <img src={p.thumbnail || p.images?.[0]} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-sm font-medium truncate">{p.title}</div>
                  <div className="text-sm text-green-600 font-bold">${Number(p.price).toFixed(2)}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default ProductDetails

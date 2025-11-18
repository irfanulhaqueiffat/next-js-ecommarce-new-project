'use client'

import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'

const Intruducing = () => {
  const [allproducts, setAllProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [activeFilter, setActiveFilter] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products')

        if (!res.ok) {
          throw new Error('Failed to load products')
        }

        const data = await res.json()
        setAllProducts(data.products)

        // extract categories dynamically
        const cats = [...new Set(data.products.map((p) => p.category))]
        setCategories(cats)

      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // 🔥 Filter logic
  const filteredProducts =
    activeFilter === "All"
      ? allproducts
      : allproducts.filter((p) => p.category === activeFilter)

  // Shudhu 6 ta see
  const visibleProducts = filteredProducts.slice(0, 6)

  return (
    <section id="intruduce" className="bg-[#EDF2EE] py-12 md:py-25">
      <div className="container mx-auto px-4 md:px-0">

        <h1 className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Introducing Our Products
        </h1>

        {/* 🔥 Dynamic Filter Menu */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mt-6 md:mt-8 mb-8 md:mb-10">
          
          {/* All button */}
          <button
            onClick={() => setActiveFilter("All")}
            className={`
              text-sm font-medium px-3 py-1
              ${activeFilter === "All"
                ? "text-[#20B526]"
                : "text-[#808080] hover:text-[#20B526]"
              }
            `}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                text-sm font-medium px-3 py-1 capitalize
                ${activeFilter === cat
                  ? "text-[#20B526]"
                  : "text-[#808080] hover:text-[#20B526]"
                }
              `}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Loading & Error */}
        {loading && (
          <p className="text-center text-sm text-gray-500">Loading products...</p>
        )}

        {error && (
          <p className="text-center text-sm text-red-500">{error}</p>
        )}

        {/* 🔥 Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}

          {!loading && visibleProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No products found for this category.
            </p>
          )}
        </div>

      </div>
    </section>
  )
}

export default Intruducing

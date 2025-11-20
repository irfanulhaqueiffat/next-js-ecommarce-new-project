'use client'

import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'

const FeaturedProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=5')

        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await res.json()

        // Pass DummyJSON data directly to ProductCart
        setProducts(data.products)
      } catch (err) {
        setError('Could not load featured products.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section id="featuredproducts" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-0">

        <h2 className="text-popins font-semibold text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12">
          Related Products
        </h2>

        {loading && <p className="text-center text-gray-500">Loading products...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default FeaturedProducts

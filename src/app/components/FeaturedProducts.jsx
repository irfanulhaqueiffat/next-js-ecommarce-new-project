'use client'

import React from 'react'
import ProductCart from './ProductCart'
import Image from 'next/image'
import p1 from '../../../public/images/p1.png'
import p2 from '../../../public/images/p2.png'
import p3 from '../../../public/images/p3.png'
import p4 from '../../../public/images/p3.png'
import p5 from '../../../public/images/p5.png'

const featuredProducts = [
  { id: 1, name: 'Green Capsicum', price: 14.99, category: 'Vegetable', image: '/images/p1.png' },
  { id: 2, name: 'Red Tomatoes', price: 9.99, category: 'Vegetable', image: '/images/p2.png' },
  { id: 3, name: 'Juicy Oranges', price: 12.5, category: 'Fruit', image: '/images/p3.png' },
  { id: 4, name: 'Fresh Strawberries', price: 18.0, category: 'Fruit', image: '/images/p4.png' },
  { id: 5, name: 'Beef Steak', price: 34.99, category: 'Meat', image: '/images/p5.png' },
]

const FeaturedProducts = () => {
  return (
    <section id="featuredproducts" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-0">

        <h2 className="text-popins font-semibold text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12">
          Featured Products
        </h2>

        {/* ⭐ 5 products in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedProducts

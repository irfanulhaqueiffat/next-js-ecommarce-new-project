// app/components/ProductCart.jsx (path তোমার মতো হতে পারে)
import React from 'react'
import Link from 'next/link'
import fallbackImage from '../../../public/images/Products(1).png'
import { useCart } from './CartContext'

const ProductCart = ({ product }) => {
  if (!product) return null
  const { addToCart } = useCart()
  const {
    id,
    title,
    price,
    category,
    images,
    thumbnail,
    rating,
  } = product
  const productImage = images?.[0] || thumbnail || fallbackImage
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating))

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <Link href={`/SingelProducts/${product.id}`} className='block'>
      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200">
        {/* Image */}
        <div className="w-full h-48 mb-3 overflow-hidden rounded-lg">
          <img src={productImage} alt={title || 'Product Image'} className="w-full h-full object-cover" />
        </div>
        {/* Category */}
        <p className="text-xs text-[#20B526] font-medium mb-1 capitalize">{category}</p>
        {/* Title */}
        <h2 className="text-base font-semibold text-[#1A1A1A] mb-2 line-clamp-2 hover:text-green-600">{title}</h2>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {stars.map((filled, i) => (
            <span key={i} className={filled ? 'text-yellow-400' : 'text-gray-300'}>★</span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>
        {/* Price + Button */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-[#20B526]">${Number(price).toFixed(2)}</span>
          <button type="button" onClick={handleAddToCart} className="px-3 py-1.5 text-sm rounded-full bg-[#20B526] text-white hover:bg-[#17941E]">Add to Cart</button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCart

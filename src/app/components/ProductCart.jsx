import React from 'react'
import Image from 'next/image'
import fallbackImage from '../../../public/images/Products(1).png'

const ProductCart = ({ product }) => {
  if (!product) return null

  // DummyJSON fields
  const {
    title,
    price,
    category,
    images,
    thumbnail
  } = product

  // Image priority:
  // 1. API "images[0]"
  // 2. API "thumbnail"
  // 3. fallback image
  const productImage = images?.[0] || thumbnail || fallbackImage

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200">
      
      {/* Image */}
      <div className="w-full h-48 relative mb-3">
        <Image
          src={productImage}
          alt={title || "Product Image"}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Category */}
      <p className="text-xs text-[#20B526] font-medium mb-1 capitalize">
        {category}
      </p>

      {/* Title */}
      <h2 className="text-base font-semibold text-[#1A1A1A] mb-2 line-clamp-2">
        {title}
      </h2>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-lg font-bold text-[#20B526]">
          ${Number(price).toFixed(2)}
        </span>

        <button className="px-3 py-1.5 text-sm rounded-full bg-[#20B526] text-white hover:bg-[#17941E]">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCart

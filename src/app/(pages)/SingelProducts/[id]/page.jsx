"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import ProductDetails from '@/app/components/ProductDetails'

export default function SingleProductPage() {
  const params = useParams()
  const id = params?.id

  return (
    <div>
      <ProductDetails id={id} />
    </div>
  )
}

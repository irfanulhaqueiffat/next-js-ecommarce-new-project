import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <p className="text-gray-600">Open a product from the <Link href="/Shop" className="text-green-600">Shop</Link> to view its details.</p>
      </div>
    </section>
  )
}

export default page
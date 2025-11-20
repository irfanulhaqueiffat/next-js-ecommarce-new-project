'use client'

import { useParams } from 'next/navigation'
import BlogDetail from '@/app/components/BlogDetail'

export default function SingleBlogPage() {
  const params = useParams()
  const id = params?.id

  return <BlogDetail id={id} />}

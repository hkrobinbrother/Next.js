import Link from 'next/link'
import React from 'react'

export default function NotFroundPage404() {
  return (
    <div className='flex justify-center items-center flex-col w-full h-screen gap-4 \'>
      <h1>404 - Page Not Found  </h1>
      <Link href="/">Go Back to Home</Link>
    </div>
  )
}

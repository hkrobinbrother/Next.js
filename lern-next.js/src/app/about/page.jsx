"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import React from 'react'

export default function AboutPage() {
  const router = useRouter()
  const isLoggedIn = false;
  const handleNavigation = () =>{
    if(isLoggedIn){
      router.push("/about/address")
    }else{
      router.push("/")
    }
  }
  return (
    <div>
      <p className='text-bold text-4xl'>About Us</p>
      <Link href="/about/address">
        <p className='text-blue-500 text-xl'>Our Address</p>
      </Link>
      <button type='button' onClick={handleNavigation}>Adress page</button>
    </div>
  )
}

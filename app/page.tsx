"use client"
import AboutUs from '@/components/pages/home/about'
import CustomerReviews from '@/components/pages/home/customer'
import FeaturedDishes from '@/components/pages/home/featured'
import Hero from '@/components/pages/home/hero'
import React from 'react'

export default function page() {
  return (
    <section>
      <Hero/>
      <FeaturedDishes/>
      <AboutUs/>
      <CustomerReviews/>
    </section>
  )
}

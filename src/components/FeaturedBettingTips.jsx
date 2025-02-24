import React from 'react'
import {default as Tabs} from './Tabs'

const FeaturedBettingTips = () => {
  return (
    <section id="featuredtips" className="bg-black/90">
        <h2 className="font-montserrat text-3xl font-bold text-center text-white mb-6">Featured <span className="text-customYellow">Betting</span> Tips</h2>
        <Tabs/>
    </section>
  )
}

export default FeaturedBettingTips
import React from 'react'
import {default as Tabs} from './Tabs'


const FeaturedBettingTips = () => {
  return (
    <section id="featuredtips" className="bg-black/90 padding dark:bg-white/70">
        <h2 className="heading text-white dark:text-black/90">Featured <span className="text-customYellow">Betting</span> Tips</h2>
        
        
        <Tabs/>
       
        
    </section>
  )
}

export default FeaturedBettingTips
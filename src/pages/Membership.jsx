import React from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import {default as Testimonial} from "../components/Testimonial"

const Membership = () => {
  return (
    <>
        <Header />
        <section className="padding bg-black font-montserrat">
        <h2 className="text-5xl text-customYellow mb-6 font-semibold text-center">Join the club</h2>
        <p className="text-white text-center">Be part of an exclusive community with access to premium features, insightful resources, and personalized experiences designed to elevate your journey. Choose a plan that fits your goals and enjoy the perks of being a member!</p>
        </section>
        <Pricing />
        <Faq/>
        <Testimonial />
        <Footer />

        
    </>
  )
}

export default Membership
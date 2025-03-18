import Header from "./components/Header"
import { default as Carousel } from "./components/Carousel"
import FeaturedBettingTips from "./components/FeaturedBettingTips"
import {default as Faq} from "./components/Faq"
import {default as Pricing} from "./components/Pricing"
import {default as Testimonial} from "./components/Testimonial"
import Footer from "./components/Footer"



function App() {
  

  return (
    <>
      <div>
        <Header/>
        <Carousel/>
        
        <FeaturedBettingTips/>
        <Faq/>
        <Pricing />
        <Testimonial />
        <Footer />
        
        
        
      </div>
      
    </>
  )
}

export default App

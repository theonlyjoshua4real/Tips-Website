import Header from "./components/Header"
import { default as Carousel } from "./components/Carousel"
import FeaturedBettingTips from "./components/FeaturedBettingTips"
import {default as Faq} from "./components/Faq"
import {default as Pricing} from "./components/Pricing"



function App() {
  

  return (
    <>
      <div>
        <Header/>
        <Carousel/>
        
        <FeaturedBettingTips/>
        <Faq/>
        <Pricing />
        
        
        
      </div>
      
    </>
  )
}

export default App

import Header from "./components/Header"
import { default as Carousel } from "./components/Carousel"
import FeaturedBettingTips from "./components/FeaturedBettingTips"
import {default as Faq} from "./components/Faq"



function App() {
  

  return (
    <>
      <div>
        <Header/>
        <Carousel/>
        
        <FeaturedBettingTips/>
        <Faq/>
        
        
        
      </div>
      
    </>
  )
}

export default App

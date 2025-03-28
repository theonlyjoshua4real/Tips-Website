import React from 'react'
import Header from "../components/Header"
import { Button, Input, Textarea } from "@material-tailwind/react";
import Footer from '../components/Footer';
const Contact = () => {
  return (
    <>
        <Header />
        <div id="contactDiv" className="flex flex-col lg:flex-row bg-black gap-8 px-4 pt-10 lg:pt-20">
            <div className="basis-2/5 font-montserrat">
                <h2 className="text-5xl text-customYellow mb-6 font-semibold">Get in touch with us</h2>
                <p className="text-white ">Have questions, feedback, or just want to say hello? We're here to help! Fill out the form and we'll get back to you as soon as possible</p>
            </div>
            <div className="basis-3/5">
                <form action="" className="">
                <div className="mb-6 lg:w-[90%] lg:float-end">
                    <Input size="lg" className="pt-4 max-w-full  text-customYellow" color="yellow" label="Name" />
                </div>
                <div className="mb-6 lg:w-[90%] lg:float-end">
                    <Input size="lg" className="pt-4 max-w-full text-customYellow" color="yellow" label="Email" />
                </div>
                <div className="mb-6 lg:w-[90%] lg:float-end">
                    <Textarea size="lg" className="pt-4 max-w-full text-customYellow h-[150px]" color="yellow" label="Your Message" />
                </div>
                <div className="lg:w-[90%] lg:float-end">
                    <Button
                        size="lg"
                        color="white"
                        variant="outlined"
                        className="w-3/5 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 text-black bg-customYellow hover:bg-transparent hover:text-customYellow hover:border-customYellow"
                        ripple={false}
                        fullWidth={true}
                    >
                        Send Message
                    </Button>
                </div>
                
                
                    
                    
                    
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact
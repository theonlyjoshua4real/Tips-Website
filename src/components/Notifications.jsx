import React, {useState, useEffect} from 'react'
import { winningsMessages } from '../constants';

const Notifications = ({messages = winningsMessages, interval = 7000}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=> {
        const timer = setInterval(()=> {
            setCurrentIndex((prevIndex)=> (prevIndex + 1) % messages.length);
        }, interval); 
        return() => clearInterval(timer);
    }, [messages, interval])
   

  return (
    <div key={currentIndex}
    className="fixed top-[75vh] left-[5vw] w-[70vw] md:w-[50vw] lg:w-[30vw] bg-yellow-200 text-black text-center p-3 z-50 rounded-md animate-slideIn"
  >
    <p>{messages[currentIndex]}</p> 
  </div>
    
  )
}

export default Notifications
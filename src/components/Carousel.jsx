import React from 'react';
import { Carousel } from "@material-tailwind/react";
import Slide from './Slide';  // Import the Slide component
import bball from '../assets/carousel/bball3.jpg';
import af4 from '../assets/carousel/af7.jpg';
import baseb1 from '../assets/carousel/baseb2.jpg';
import fball1 from '../assets/carousel/fball1.jpg';

export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-none sm:h-60 lg:h-72"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Slide
        imageSrc={bball}
        title="Bet on the Best Shots!"
        description="Elevate your game with expert basketball betting tips!"
        buttonText1="Explore"
        buttonText2="Gallery"
      />
      <Slide
        imageSrc={af4}
        title="Touchdown Triumphs!"
        description="Get ready for gridiron glory with our top American football betting tips!"
        buttonText1="Explore"
        buttonText2="Gallery"
      />
      <Slide
        imageSrc={baseb1}
        title="Bet on the Home Run!"
        description="Step up to the plate with winning baseball betting tips!"
        buttonText1="Explore"
        buttonText2="Gallery"
      />
      <Slide
        imageSrc={fball1}
        title="Score Big with Soccer Bets!"
        description="Kick off your betting game with our top soccer betting tips!"
        buttonText1="Explore"
        buttonText2="Gallery"
      />
    </Carousel>
  );
}

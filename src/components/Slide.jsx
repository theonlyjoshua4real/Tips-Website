import React from 'react';
import { Typography, Button } from "@material-tailwind/react";

export default function Slide({ imageSrc, title, description, buttonText1, buttonText2 }) {
  return (
    <div className="relative h-full w-full">
      <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 dark:bg-black/40">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography variant="h1" className="mb-2 text-2xl md:text-3xl lg:text-4xl text-white">
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-4 opacity-80 dark:opacity-100">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            <Button size="lg" color="white">{buttonText1}</Button>
            <Button size="lg" color="white" variant="text">{buttonText2}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

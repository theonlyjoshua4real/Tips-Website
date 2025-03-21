import React, { useState, useEffect } from "react";
import { winningsMessages } from "../constants";
import { football, baseball, basketball, americanfootball } from "../assets/svg";

const Notifications = ({ messages = winningsMessages, interval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mapping sports to their icons
  const sportIcons = {
    Basketball: basketball,
    Baseball: baseball,
    Soccer: football,
    Football: americanfootball,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, interval);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [messages, interval]);

  // Helper function to edit the notification
  function editNotification(message) {
    const match = message.match(/(\w+)!$/); // Match the last word before "!"
    const sport = match ? match[1] : null; // Extract the sport if it exists
    const updatedMessage = sport ? message.replace(`${sport}!`, "").trim() : message;
    return { updatedMessage, sport }; // Return both the updated message and the sport
  }

  // Get the current message and process it
  const currentMessage = messages[currentIndex];
  const { updatedMessage, sport } = editNotification(currentMessage);

  return (
    <div
      key={currentIndex}
      className="fixed flex gap-3 justify-center items-center top-[75vh] left-[5vw] w-[70vw] md:w-[50vw] lg:w-[25vw] bg-customYellow text-black text-center p-3 z-50 rounded-md animate-slideIn"
    >
      {/* Dynamically render the correct icon */}
      {sport && (
        <img
          src={sportIcons[sport]} // Get the corresponding icon
          alt={`${sport} Icon`}
          className="h-8 w-8"
        />
      )}
      <p>{updatedMessage}</p> {/* Display message without the sport */}
    </div>
  );
};

export default Notifications;

import React, { useState, useEffect } from "react";
import gif from '../../assets/gif/click_your.gif';
import mens from '../../assets/images/MENS.png'
import kids from '../../assets/images/Kids.png'
import women from '../../assets/images/Womens.png'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000; // Interval in milliseconds for automatic slide change

  const images = [mens,kids,women];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="hero flex w-[100vw] h-[200px]">
      {/* Left Section with GIF */}
      <div className="left flex-1">
        <img src={gif} alt="GIF" className="w-full h-auto" />
      </div>

      {/* Right Section with Carousel */}
      <div className="right flex-1 relative">
        {/* Carousel Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover w-[200px]"
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

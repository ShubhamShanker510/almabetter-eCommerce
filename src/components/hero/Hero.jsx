import React, { useState, useEffect } from "react";
import gif from '../../assets/gif/click_your.gif';
import mens from '../../assets/images/MENS.png'
import kids from '../../assets/images/Kids.png'
import women from '../../assets/images/Womens.png'
import { Carousel } from "flowbite-react";


const Hero = () => {

  return (
    <div className="hero flex justify-center">
      <div className="left">
        <img src={gif} alt="GIF" className="rounded-md" width={400}/>
      </div>

      <div className="right w-[599px]">
        <Carousel slideInterval={5000}>
          <img src={mens} alt=""/>
          <img src={women} alt=""/>
          <img src={kids} alt=""/>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Navbar from "./Navbar";

// Changes: Added bg-black to fix the background color and made sure the image fits the container
const Hero = () => {
  return (
    <div
  id="hero"
  className=" min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-cover"
  style={{ backgroundSize: "30%", backgroundPosition: "left 100px top 100px"}} 
>

      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>

        {/* Changes: Adjusted text size and centering */}
        <div className="text-[70px] sm:text-[90px] text-bold from-neutral-100 leading-tight flex justify-center items-center text-white">
          <div>
       
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Saira</p>
            <p data-aos="zoom-in-up">Rizvi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
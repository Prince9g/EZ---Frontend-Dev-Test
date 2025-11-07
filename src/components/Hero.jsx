import React from "react";
import mandala from "../assets/Hero/Hero Mandala.svg";
import logo from "../assets/VFilms Logo.png";
// import bgTexture from "../assets/bg-texture.png"; // background texture

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#fdd0c14e] px-6 md:px-16 lg:px-24 overflow-hidden"
      
    >
      {/* Left side */}
      <div>
      <div className="absolute left-[18%] top-[30%] md:left-[5%] md:top-1/2 transform -translate-y-1/2 opacity-80 pointer-events-none">
        <img
          src={mandala}
          alt="Mandala Background"
          className="w-[250px] md:w-[400px] lg:w-[450px]"
        />
      </div>
      <div className="absolute left-[30%] top-[30%] md:left-[12%] md:top-1/2 transform -translate-y-1/2 z-10">
        <img
          src={logo}
          alt="V Films Logo"
          className="w-[140px] md:w-[200px] lg:w-[230px]"
        />
      </div>
      </div>

      {/* Right Text Section */}
      <div className="z-10 md:ml-[40%] flex flex-col justify-center items-center md:gap-2  max-w-xl mt-64 md:mt-0">
        <h2 className="text-2xl md:text-3xl lg:text-[3rem] text-[#1b345d] leading-relaxed mb-6 font-serif">
          Varnan is where stories <br/>find
          their voice and form
        </h2>

        <p className="text-[#e65c3c] text-lg md:text-2xl md:text-center font-[500] mb-6 tracking-wide">
          Films . Brands . Art
        </p>

        <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed max-w-lg">
          Since 2009, V’ve been telling stories — stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way — by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories — V honors them.
        </p>
      </div>
    </section>
  );
};

export default Hero;

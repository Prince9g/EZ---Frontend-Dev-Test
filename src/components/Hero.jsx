import React from "react";
import mandala from "../assets/Hero/Hero Mandala.svg";
import logo from "../assets/VFilms Logo.png"
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#fff7f3] px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <img
          src={mandala}
          alt="Mandala"
          className="w-[90%] md:w-[30%]"
        />
      </div>

      <div className="z-10 w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
      <img src={logo}/>
      </div>

      <div className="z-10 w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl italic text-[#1b345d] leading-relaxed mb-4">
          Varnan is where stories find <br /> their voice and form
        </h2>

        <p className="text-[#e65c3c] text-lg md:text-xl font-medium mb-4">
          Films . Brands . Art
        </p>

        <p className="text-gray-700 text-sm md:text-base max-w-md leading-relaxed mx-auto md:mx-0">
          Since 2009, V’s been telling stories — stories of people, their
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

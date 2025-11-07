import React from "react";
import i1 from "../assets/Group 10.png";
import i2 from "../assets/OBJECTS.png";
const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="min-h-screen bg-[#fdd0c14e] relative flex-col justify-center items-center px-6 py-16 md:text-center"
    >
      <img src={i1} alt="group" className="md:w-1/2 absolute right-0 bottom-0 overflow-hidden"/>
      <img src={i2} alt="group2" className="w-1/2 md:w-1/3 absolute right-28 bottom-[0%]"/>
      <h2 className="absolute md:text-3xl md:w-1/3 md:right-32 top-[55%] md:top-[20%] italic text-[#1b345d]">
        Every project is more than just a brief - it’s a new chapter waiting to be written.
Together, we've crafted tales that inspire, connect, and endure.
      </h2>
      <div className="absolute md:left-[10%] top-[70%] md:top-[25%]">
      <p className="text-gray-700 md:text-3xl md:max-w-[45%] md:mb-10">
        A montage of familiar faces and names.
      </p>
      <p className="text-gray-700 md:max-w-[45%]">
        Some stories come from the biggest names. Others begin with bold, rising voices.
We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
      </p>
      </div>
      <div className="absolute md:bottom-[20%] md:left-[8%]">
      <div className="flex flex-wrap justify-center gap-4 md:gap-0">
        <div className="md:w-48 md:h-36 bg-yellow-100 shadow-md p-6 rounded transform md:rotate-[15deg]">
          <p className="text-5xl font-bold">85+</p>
          <p className="text-orange-400 mt-4">Projects</p>
        </div>
        <div className="md:w-48 md:h-36 bg-yellow-100 shadow-md p-6 rounded transform md:rotate-[15deg]">
          <p className="text-5xl font-bold">50+</p>
          <p className="text-orange-400 mt-4">Happy Clients</p>
        </div>
        <div className="md:w-48 md:h-36 bg-yellow-100 shadow-md p-6 rounded transform md:rotate-[15deg]">
          <p className="text-5xl font-bold">10+</p>
          <p className="text-orange-400 mt-4">Experts Team</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;

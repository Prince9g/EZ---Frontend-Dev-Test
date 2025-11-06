import React from "react";
import i1 from "../assets/Group 10.png";
import i2 from "../assets/OBJECTS.png";
const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="min-h-screen bg-[#fdd0c14e] relative flex-col justify-center items-center px-6 py-16 text-center"
    >
      <img src={i1} alt="group" className="w-1/2 absolute right-0 bottom-0 overflow-hidden"/>
      <img src={i2} alt="group2" className="w-1/3 absolute right-28 bottom-[0%]"/>
      <h2 className="absolute text-3xl w-1/3 right-32 top-[20%] italic text-[#1b345d]">
        Every project is more than just a brief - it’s a new chapter waiting to be written.
Together, we've crafted tales that inspire, connect, and endure.
      </h2>
      <div className="absolute left-[10%] top-[25%]">
      <p className="text-gray-700 text-3xl max-w-[45%] mb-10">
        A montage of familiar faces and names.
      </p>
      <p className="text-gray-700 max-w-[45%]">
        Some stories come from the biggest names. Others begin with bold, rising voices.
We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
      </p>
      </div>
      <div className="absolute bottom-[20%] left-[8%]">
      <div className="flex flex-wrap justify-center">
        <div className="w-48 h-36 bg-yellow-100 shadow-md p-6 rounded transform rotate-[15deg]">
          <p className="text-5xl font-bold">85+</p>
          <p className="text-orange-400 mt-4">Projects</p>
        </div>
        <div className="w-48 h-36 bg-yellow-100 shadow-md p-6 rounded transform rotate-[15deg]">
          <p className="text-5xl font-bold">50+</p>
          <p className="text-orange-400 mt-4">Happy Clients</p>
        </div>
        <div className="w-48 h-36 bg-yellow-100 shadow-md p-6 rounded transform rotate-[15deg]">
          <p className="text-5xl font-bold">10+</p>
          <p className="text-orange-400 mt-4">Experts Team</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;

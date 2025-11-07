import React from "react";
import i1 from "../assets/136881584_562ce9a4-ee1d-4be1-8b12-5b603ee14c6b 1.svg";
import i2 from "../assets/Group 2.svg";
import i3 from "../assets/Group 9.png";
import i4 from "../assets/Vector-1.svg";
import i5 from "../assets/Vector-2.svg";
import i6 from "../assets/Vector.svg";
const AboutTeam = () => {
  return (
    <section
      id="aboutteam"
      className="h-screen bg-[#fdd0c14e] relative"
    >
      <div className="hidden md:block absolute left-44 top-0 md:w-[33%] text-gray-800">
        <img src={i3} alt="alterMatter"/>
      </div>
      <div className="absolute bottom-0 left-10 md:w-[20%] text-gray-800">
        <img src={i1} alt="alterMatter"/>
      </div>
      <div className="hidden md:block absolute left-[31%] bottom-24 font-serif text-xl">Branding Experts</div>
      <div className="hidden md:block absolute right-[39%] top-[18%] font-serif text-xl">Art Creators</div>
      <div className="hidden md:block absolute right-16 top-[25%] font-serif text-xl">Film Maker</div>
      <div className="hidden md:block absolute right-[30%] top-[23%] md:w-[14%] text-gray-800">
        <img src={i4} alt="alterMatter"/>
      </div>
      <div className="hidden md:block absolute right-24 top-[30%] md:w-1/7 text-gray-800">
        <img src={i5} alt="alterMatter"/>
      </div>
      <div className="hidden md:block absolute left-[35%] bottom-32 md:w-[15%] text-gray-800">
        <img src={i6} alt="alterMatter"/>
      </div>
      <div className="absolute top-[15%] md:right-[15%] md:top-[35%] md:w-[35%] text-gray-800">
        <img src={i2} alt="alterMatter"/>
      </div>
      
        <div className="absolute bottom-12 mx-6 md:mx-0 md:right-[20%]">
      <div className="mt-8 md:mt-0 flex flex-col items-center text-center">
        <h2 className="text-xl italic text-[#1b345d] mb-4">
          Take a closer look at the stories V bring to life.
        </h2>
        <a href="#portfolio" className="cursor-pointer bg-[#e65c3c] text-white px-5 py-2 rounded-full">
          View Portfolio
        </a>
      </div>
      </div>
    </section>
  );
};

export default AboutTeam;

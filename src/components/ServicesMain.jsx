import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import tape from "../assets/image 6.png";
import top from "../assets/Vector 5.svg";
import bot from "../assets/Frame 33.svg";
const ServicesMain = () => {

  return (
    <section
      id="services"
      className="relative bg-[#fdd0c14e] py-16 px-6 text-center min-h-screen overflow-hidden"
    >
      <h2 className="text-md md:text-3xl italic text-[#1b345d] mb-10">
        The storyboard reveals the breadth of our craft.
      </h2>
      <img src={f1} className="absolute md:right-[18%] md:top-[30%] w-[50%] md:w-[23%]"/>
      <img src={f2} className="absolute top-[55%] left-[30%] md:left-[40%] md:top-[35%] w-[50%] md:w-[20%]"/>
      <img src={f3} className="absolute right-0 md:left-[18%] md:top-[30%] w-[50%] md:w-[23%]"/>
      <img src={top} className="absolute top-24 md:left-[25%]"/>
      <img src={bot} className="absolute bottom-0 left-0"/>
      <img src={tape} className="hidden md:block absolute left-[45%] top-[32%] w-[10%]"/>
      <img src={tape} className="hidden md:block absolute right-[19%] top-[30%] rotate-[30deg] w-[10%]"/>
      <img src={tape} className="hidden md:block absolute left-[19%] top-[30%] w-[10%]"/>
    </section>
  );
};

export default ServicesMain;

import React from "react";
import m1 from "../assets/Group 11.png"
import r1 from "../assets/Rectangle 44.png";
import r2 from "../assets/Rectangle 45.png";
import v1 from "../assets/Vector 9.png";
import v2 from "../assets/Vector 10.png";
import c from "../assets/Cam Group.svg";
import f from "../assets/Footer Vector.png";
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-[#fdd0c14e] relative flex-col items-center justify-center text-center px-6 py-20"
    >
      <h2 className="text-2xl font-semibold mb-2">The Highlight Reel</h2>
      <p className="text-gray-600 mb-8">Watch the magic we've captured.</p>
      <img src={c} className="absolute left-16 h-[70%]"></img>
      <div className="absolute left-[25%] top-[25%]">
      <div className="relative max-w-3xl">
        <img src={v1} className="absolute right-6 top-36 z-[1]"/>
        <img src={v2} className="absolute left-6 top-36 z-[1]"/>
        <img src={r1} className="absolute right-4 top-20 h-[65%]"/>
        <img src={r2} className="absolute left-4 top-20 h-[65%]"/>
        <img src={m1} />
      </div>
      </div>
      <img src={f} className="absolute right-0 bottom-0"></img>
    </section>
  );
};

export default Portfolio;

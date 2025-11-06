import React from "react";
import m1 from "../assets/Group 9.png"
const ServicesMain = () => {
  const services = [
    { img: {m1}, title: "Film Production" },
    { img: {m1}, title: "Branding" },
    { img: {m1}, title: "Art Curation" },
  ];

  return (
    <section
      id="services"
      className="bg-[#fff7f3] py-16 px-6 text-center min-h-screen"
    >
      <h2 className="text-2xl italic text-[#1b345d] mb-10">
        The storyboard reveals the breadth of our craft.
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-3 rounded shadow-lg max-w-xs hover:scale-105 transition transform"
          >
            <img
              src={s.img}
              alt={s.title}
              className="rounded mb-3"
            />
            <p className="font-medium">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesMain;

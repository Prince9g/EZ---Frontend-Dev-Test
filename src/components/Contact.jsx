import React, { useState } from "react";
import v1 from "../assets/FooterVec1.png";
import v2 from "../assets/FooterVec2.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Fields validation
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMsg("Please fill all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setResponseMsg("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMsg("Form Submitted Successfully");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await res.json();
        setResponseMsg(errorData.error || "Something went wrong");
      }
    } catch (error) {
      setResponseMsg("Network error");
    }
  };

  return (
    <div className="relative">
      <img src={v1} className="absolute bottom-0 left-0 z-[-1]"/>
      <img src={v2} className="absolute right-0 top-0 z-[-1]"/>
    <section
      id="contact"
      className="min-h-screen bg-[#fdd0c14e] flex flex-col md:flex-row md:justify-evenly md:items-center px-6 md:px-16 py-12"
    >
      <div className="text-center md:w-1/3 text-xl font-serif">
        Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.<br/>"Let’s catch up over coffee."<br/>Great stories always begin with a good conversation
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
      <div className="text-3xl font-semibold pt-8">Join The Story</div>
      <div className="text-sm">Ready To bring your vision to life? Let's Talk</div>
      <form
        onSubmit={handleSubmit}
        className="bg-trasparent p-8 rounded-xl w-full max-w-lg space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e65c3c]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e65c3c]"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e65c3c]"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#e65c3c]"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#e65c3c] text-white py-3 rounded-full hover:bg-[#d94b2b] transition"
        >
          Submit
        </button>

        {responseMsg && (
          <p className="text-center text-gray-700 mt-3 text-xl">{responseMsg}</p>
        )}
      </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;

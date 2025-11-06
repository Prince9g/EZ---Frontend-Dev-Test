import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setResponse("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setResponse("Invalid email address.");
      return;
    }

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData
      );

      if (res.status === 200) {
        setResponse("Form Submitted ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      setResponse("Submission failed. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#fff7f3] flex flex-col md:flex-row justify-center items-center px-6 py-16"
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <p className="text-gray-700 max-w-md">
          Whether you have an idea or want to explore how V can work together,
          we’re just a message away. Great stories begin with a conversation.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 bg-white p-8 rounded-lg shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Join the Story</h2>

        <input
          type="text"
          name="name"
          placeholder="Your name*"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email*"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your message*"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-2 rounded h-24"
        ></textarea>

        <button
          type="submit"
          className="bg-[#e65c3c] text-white w-full py-2 rounded hover:bg-[#d94b2b]"
        >
          Submit
        </button>

        {response && (
          <p className="text-center text-sm text-gray-700 mt-2">{response}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;

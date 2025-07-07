import React, { useState, forwardRef } from "react";
import { supabase } from "../../utils/supabase";

const SectionSeven = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("portfolio_message") // ganti dengan nama tabel yang kamu buat
      .insert([formData]);
    console.log("Insert result:", data);

    if (error) {
      console.error("Insert failed:", error.message);
      alert("Failed to send message");
    } else {
      alert("Message sent successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div
      ref={ref}
      className=" flex h-fit bg-sky-950 flex-col px-4 pt-16 pb-4 text-white"
    >
      <div className="text-center mb-2">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact.</h1>
      </div>

      <div className="max-w-2xl w-full mx-auto bg-sky-900 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">First Name*</label>
              <input
                type="text"
                required
                className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your first name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Last Name*</label>
              <input
                type="text"
                required
                className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your last name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email*</label>
            <input
              type="email"
              required
              className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Phone</label>
            <input
              type="tel"
              className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="+62 812 xxx xxxx"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Message*</label>
            <textarea
              rows="4"
              required
              className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Type your message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

SectionSeven.displayName = "SectionSeven";

export default SectionSeven;

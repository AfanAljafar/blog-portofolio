import React, { useState, forwardRef } from "react";
import axios from "axios";

interface SectionSevenProps {
  id?: string;
}

const SectionSeven = forwardRef<HTMLElement, SectionSevenProps>(
  (props, ref) => {
    const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    });

    const handleChange = (e: any) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = async (e: any) => {
      e.preventDefault();

      try {
        const { data } = await axios.post(
          // "http://localhost:4001/visitor/contact",
          `${import.meta.env.VITE_API_URL}/visitor/contact`,
          formData
        );
        console.log("Insert result:", data);

        alert("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error: any) {
        console.error("Insert failed:", error.message);
        alert("Failed to send message");
      }
    };

    return (
      <section
        id="contact"
        ref={ref}
        className=" flex h-fit bg-sky-950 flex-col px-4 pt-16 pb-4 text-white"
      >
        <div className="text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact.
          </h1>
        </div>

        <div className="max-w-2xl w-full mx-auto bg-sky-900 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="first_name"
                  className="mb-1 text-sm font-medium"
                >
                  First Name*
                </label>
                <input
                  id="first_name"
                  type="text"
                  required
                  name="first_name"
                  placeholder="Your first name"
                  autoComplete="given-name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label htmlFor="last_name" className="mb-1 text-sm font-medium">
                  Last Name*
                </label>
                <input
                  id="last_name"
                  type="text"
                  required
                  name="last_name"
                  placeholder="Your last name"
                  autoComplete="family-name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-medium">
                Email*
              </label>
              <input
                id="email"
                type="email"
                required
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+62 812 xxx xxxx"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-sm font-medium">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>

            {/* Submit button */}
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
      </section>
    );
  }
);

SectionSeven.displayName = "SectionSeven";

export default SectionSeven;

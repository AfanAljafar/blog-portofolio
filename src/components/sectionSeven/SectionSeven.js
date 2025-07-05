import React, { forwardRef } from "react";

const SectionSeven = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="section-four flex min-h-screen bg-sky-950 flex-col px-4 py-16 text-white"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact.</h1>
      </div>

      <div className="max-w-2xl w-full mx-auto bg-sky-900 p-8 rounded-lg shadow-md">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">First Name*</label>
              <input
                type="text"
                required
                className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your first name"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Last Name*</label>
              <input
                type="text"
                required
                className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your last name"
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
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Phone</label>
            <input
              type="tel"
              className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="+62 812 xxx xxxx"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Message*</label>
            <textarea
              rows="4"
              required
              className="p-2 rounded bg-sky-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Type your message..."
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

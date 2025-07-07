import React, { forwardRef, useState } from "react";
import TestimonialCard from "./testimonialCard/TestimonialCard";
import ReactModal from "react-modal";
import { MessageSquareDiff, Star } from "lucide-react";

ReactModal.setAppElement("#root");

// const testimonials = [
//   {
//     quote: "Woi wkwokw lawak mode dark lu",
//     name: "Johan",
//     role: "Developer",
//     initial: "JO",
//     rating: 5,
//   },
//   {
//     quote: "Bagi bg please",
//     name: "Tutor dong abangku",
//     role: "Developer",
//     initial: "TA",
//     rating: 5,
//   },
//   {
//     quote: "Bagi dong",
//     name: "Tutor abangku",
//     role: "Developer",
//     initial: "Az",
//     rating: 3,
//   },
// ];

const SectionSix = forwardRef(({ props, onSubmit }, ref) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    testimonial: "",
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (form.testimonial.length < 10) {
      setError("Testimonial must be at least 10 characters");
      return;
    }
    setError("");
    addTestimonial(form);
    if (onSubmit) onSubmit(form);
    // onSubmit(form);
    closeModal();

    // Reset form
    setForm({
      name: "",
      email: "",
      position: "",
      testimonial: "",
    });
  };

  const addTestimonial = (data) => {
    const newItem = {
      quote: data.testimonial,
      name: data.name,
      role: data.position,
      initial: data.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
      rating: 5,
    };
    setTestimonials((prev) => [...prev, newItem]);
  };

  return (
    <section
      ref={ref}
      className="section-four w-screen min-h-screen pt-[72px] px-4 md:px-10 py-10 bg-transparent"
    >
      <div className="text-center mb-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-1">
          What People Say
        </h1>
        <p className="text-white">
          Voices from clients, collaborators, and friends who have experienced
          my work
        </p>
      </div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <span>
              <Star />
            </span>
            <h2 className="text-xl font-semibold">Testimonials</h2>
          </div>
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <MessageSquareDiff size={24} />
            Add Testimonial
          </button>
        </div>

        {/* Testimonial List (scrollable if long) */}
        <div className="max-h-[320px] overflow-y-auto pr-2">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="addTestimonial"
        className="relative w-full max-w-lg mx-auto bg-white rounded-xl p-6 shadow-xl flex flex-col space-y-4 max-h-[90vh] overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center">
          Share Your Testimonial
        </h2>
        <p className="text-sm text-center text-gray-600">
          Tell us about your experience working with us
        </p>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="testimonial"
            placeholder="Testimonial"
            value={form.testimonial}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
              error ? "border-red-400" : "border-gray-300"
            } bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            rows={4}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>

        {/* Actions */}
        <div className="flex justify-between gap-2 pt-2">
          <button
            onClick={closeModal}
            className="w-1/2 border border-gray-300 rounded-md py-2 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-1/2 bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700"
          >
            ➤ Submit
          </button>
        </div>
      </ReactModal>
    </section>
  );
});

export default SectionSix;

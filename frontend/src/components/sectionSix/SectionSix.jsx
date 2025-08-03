import React, { forwardRef, useState, useEffect } from "react";
import TestimonialCard from "./testimonialCard/TestimonialCard";
import ReactModal from "react-modal";
import { MessageSquareDiff, Star } from "lucide-react";
import axios from "axios";
import RatingInput from "./ratingInput/RatingInput";

ReactModal.setAppElement("#root");

const SectionSix = forwardRef(({ props, onSubmit }, ref) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    testimonial: "",
    rating: 5,
  });
  const trimmedForm = {
    ...form,
    name: form.name.trim(),
    email: form.email.trim().toLowerCase(),
    position: form.position.trim(),
    testimonial: form.testimonial.trim(),
    rating: form.rating,
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const fetchTestimonials = async () => {
    const { data, error } = await axios.get(
      // "http://localhost:4001/visitor/display-testimonial"
      `${import.meta.env.VITE_API_URL}/visitor/display-testimonial`
    );

    if (error) {
      console.error("Fetch failed:", error.message);
    } else {
      // console.log("Fetched testimonials:", data);
      setTestimonials(data.data);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "rating" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !trimmedForm.name ||
      !trimmedForm.email ||
      !trimmedForm.position ||
      trimmedForm.testimonial.length < 10
    ) {
      setError("Please complete all fields with valid content.");
      setIsSubmitting(false);
      return;
    }

    const { error } = await axios.post(
      // "http://localhost:4001/visitor/create-testimonial"
      `${import.meta.env.VITE_API_URL}/visitor/create-testimonial`,
      trimmedForm
    );

    if (error) {
      console.error("Insert failed:", error.message);
      alert("Failed to send message");
      setIsSubmitting(false);
      return;
    }

    alert("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      position: "",
      testimonial: "",
    });
    setError("");

    await fetchTestimonials();
    if (onSubmit) onSubmit(trimmedForm);
    closeModal();
    setIsSubmitting(false);
  };

  return (
    <section
      ref={ref}
      className="section-four w-screen min-h-screen pt-[72px] px-4 md:px-10 py-10 bg-transparent"
    >
      <div className="text-center mb-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-1">
          {props.testimonialTitle}
        </h1>
        <p className="text-white">{props.testimonialTagLine}</p>
      </div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <span>
              <Star size={16} strokeWidth={3} />
            </span>
            <h2 className="text-xl font-semibold">Testimonials</h2>
          </div>
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <MessageSquareDiff size={16} strokeWidth={3} />
            Add Testimonial
          </button>
        </div>

        {/* testimonial list */}
        <div className="max-h-[320px] overflow-y-auto pr-2">
          {testimonials
            .slice()
            .reverse()
            .map((item) => (
              <TestimonialCard
                key={item.id}
                quote={item.testimonial}
                name={item.name}
                role={item.position}
                initial={item.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
                rating={item.rating}
              />
            ))}
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="addTestimonial"
        className="relative w-full max-w-lg mx-auto bg-white rounded-xl p-6 shadow-xl flex flex-col space-y-1 max-h-[90vh] overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center">
          Share Your Testimonial
        </h2>
        <p className="text-sm text-center text-gray-600">
          Tell me about your experience knowing me
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
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
            <div>
              <label className="text-sm font-medium text-gray-700">
                Rating
              </label>
              <RatingInput
                value={form.rating}
                onChange={(newRating) =>
                  setForm({ ...form, rating: newRating })
                }
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          {/* Actions */}
          <div className="flex justify-between gap-2 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="w-1/2 border border-gray-300 rounded-md py-2 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              // onClick={handleSubmit}
              className="w-1/2 bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700"
            >
              {isSubmitting ? "Submitting..." : "➤ Submit"}
            </button>
          </div>
        </form>
      </ReactModal>
    </section>
  );
});

export default SectionSix;

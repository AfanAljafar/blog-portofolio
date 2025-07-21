const blogPortofolioModels = require("../models/blog_portofolio");

const createTestimonial = async (req, res) => {
  const { name, email, position, testimonial, rating } = req.body;

  try {
    const testimonialSent = await blogPortofolioModels.createTestimonial(
      name,
      email,
      position,
      testimonial,
      rating
    );
    const response = {
      message: "Create Testimonial Success",
      data: testimonialSent.rows[0],
    };
    res.status(201).json(response);
    console.log("Create Testimonial Success", response);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: "server error", serverMessage: error });
  }
};

const displayTestimonial = async (req, res) => {
  try {
    const testimonialsData = await blogPortofolioModels.displayTestimonial();
    res.status(200).json({
      message: "Successfully fetched all testimonials",
      data: testimonialsData.rows,
    });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: "server error", serverMessage: error });
  }
};

const submitMessage = async (req, res) => {
  const { first_name, last_name, email, phone, message } = req.body;

  try {
    const messageSent = await blogPortofolioModels.submitMessage(
      first_name,
      last_name,
      email,
      phone,
      message
    );
    const response = {
      message: "Submit Message Success",
      data: messageSent.rows[0],
    };
    res.status(201).json(response);
    console.log("Submit Message Success");
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: "server error", serverMessage: error });
  }
};

module.exports = { createTestimonial, displayTestimonial, submitMessage };

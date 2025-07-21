const express = require("express");
const blogPortofolioController = require("../controller/blog_portofolio");

const router = express.Router();

router.post("/create-testimonial", blogPortofolioController.createTestimonial);

router.get("/display-testimonial", blogPortofolioController.displayTestimonial);

router.post("/contact", blogPortofolioController.submitMessage);

module.exports = router;

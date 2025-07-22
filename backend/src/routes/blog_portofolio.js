const express = require("express");
const blogPortofolioController = require("../controller/blog_portofolio");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "✅ Visitor route works from Vercel!" });
});

router.post("/create-testimonial", blogPortofolioController.createTestimonial);

router.get("/display-testimonial", blogPortofolioController.displayTestimonial);

router.post("/contact", blogPortofolioController.submitMessage);

module.exports = router;

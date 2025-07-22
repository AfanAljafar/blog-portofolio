const express = require("express");
const blogPortofolioController = require("../controller/blog_portofolio");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "✅ Visitor route works from Vercel!" });
});

router.get("/db-check", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({
      status: "connected ✅",
      server_time: result.rows[0].now,
    });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ status: "not connected ❌", error: err.message });
  }
});

router.post("/create-testimonial", blogPortofolioController.createTestimonial);

router.get("/display-testimonial", blogPortofolioController.displayTestimonial);

router.post("/contact", blogPortofolioController.submitMessage);

module.exports = router;

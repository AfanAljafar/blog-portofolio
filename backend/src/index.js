const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbPool = require("./config/dataBase");
const middlewareLogging = require("./middleware/eventLogging");
const blogPortofolioRoutes = require("./routes/blog_portofolio");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://afanaljafar.github.io"],
//     methods: ["GET", "POST", "OPTIONS"],
//     credentials: true,
//   })
// );
app.use(cors());
app.use(express.json());
app.use(middlewareLogging);

app.get("/", (req, res) => {
  res.send("✅ Backend running on Vercel");
});

app.use("/visitor", blogPortofolioRoutes);

// app.listen(PORT, () => {
//   console.log(`Server Running at Port ${PORT}`);
// });

// Jalankan server hanya jika dijalankan langsung
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server Running at Port ${PORT}`);
  });
}

// Ekspor app untuk digunakan oleh handler Vercel
module.exports = app;

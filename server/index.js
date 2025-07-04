const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // <-- penting untuk bisa baca JSON body

app.post("/signup", (req, res) => {
  console.log("Received signup data:", req.body); // <--- Cek di sini
  res.status(200).json({ message: "Sign up successful!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// // const express = require("express");
// // const app = express();
// // const PORT = 5000;

// // app.get("/", (req, res) => {
// //   res.send("Hello from Express!");
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });

// // app.get("/api/message", (req, res) => {
// //   res.json({ message: "Halo dari backend Express!" });
// // });

// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // Supaya bisa baca body JSON

// // POST route for sign-up
// app.post("/api/signup", (req, res) => {
//   const { name, email, password } = req.body;
//   console.log("Received signup data:", { name, email, password });

//   // Di sini kamu bisa simpan ke database (misalnya MongoDB)
//   res.status(200).json({ message: "Sign up successful!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

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

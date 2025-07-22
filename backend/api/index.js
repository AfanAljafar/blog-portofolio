const app = require("../src/index");
const cors = require("cors");

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://afanaljafar.github.io"],
//     methods: ["GET", "POST", "OPTIONS"],
//     credentials: true,
//   })
// );
// app.use(cors());

module.exports = (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  // if (req.method === "OPTIONS") {
  //   res.status(200).end();
  //   return;
  // }
  app(req, res);
};

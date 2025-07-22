const app = require("../src/index");
const serverless = require("serverless-http");
const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://afanaljafar.github.io/blog-portofolio/",
    ],
    credentials: true,
  })
);
app.use(cors());

// module.exports = serverless(app);
module.exports = (req, res) => {
  app(req, res);
};

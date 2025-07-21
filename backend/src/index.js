const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbPool = require("./config/dataBase");
const middlewareLogging = require("./middleware/eventLogging");
const blogPortofolioRoutes = require("./routes/blog_portofolio");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;

app.use(middlewareLogging);
app.use(express.json());
app.use(cors());

app.use("/visitor", blogPortofolioRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT}`);
});

const app = require("../src/index");
const cors = require("cors");

module.exports = (req, res) => {
  app(req, res);
};

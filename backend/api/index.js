const app = require("../src/index");
const serverless = require("serverless-http");

module.exports = serverless(app);
// module.exports = (req, res) => {
//   app(req, res);
// };

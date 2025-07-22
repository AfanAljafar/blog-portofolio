const app = require("../src/index"); // Menyesuaikan struktur folder milikmu
const serverless = require("serverless-http");

module.exports = serverless(app);

const logging = (req, res, next) => {
  console.log("Event Logging API");
  next();
};

module.exports = logging;

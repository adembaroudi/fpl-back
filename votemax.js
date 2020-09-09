const max = require("express-rate-limit");

module.exports = max({
  windowMs: 24 * 60 * 60 * 1000,
  maximumVote: 5,
  message: "you have the right on only 5 votes per day ",
  headers: true,
});
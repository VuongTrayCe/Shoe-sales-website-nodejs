const express = require("express");
const home = require("./home.route");
module.exports = (app) => {
  app.use("/", home);
};

const express = require("express");
const home = require("./home.route");
const products = require("./product.route");

module.exports = (app) => {
  app.use("/", home);
  app.use("/products", products);
};

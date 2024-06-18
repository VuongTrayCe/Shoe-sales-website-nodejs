const express = require("express");
const home = require("./home.route");
const products = require("./product.route");
const cartRouter = require("./cart.route");
const fetchCart = require("../../controller/client/cart.controller");


module.exports = (app) => {
  app.use(fetchCart.get)
  app.use("/", home);
  app.use("/products", products);
  app.use("/cart", cartRouter);
};

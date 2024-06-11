const ex = require("express");
const order = require("../../controller/admin/order.controller");
const Router = ex.Router();
Router.get("/", order.index);
module.exports = Router;

const express = require("express");
const router = express.Router();
const controller = require("../../controller/admin/product.controller");

router.get("/", controller.index);
router.patch("/change-status/:status/:id", controller.changeStatus);
router.delete("/delete/:id", controller.delete);

// router.get("/detail/:id", controller.detail);
router.patch("/add", controller.add);

module.exports = router;

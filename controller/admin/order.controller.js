const product = require("../../model/product.model");
const getPagination = require("../../helpers/getPagination");
module.exports.index = async (req, res) => {
  // const listOption = listOption1(req.query);
  let find = {
    delete: "false",
  };

  if (req.query.keyword) {
    // const regex = new RegExp(keyword);
    // find.title = regex;
    find.title = { $regex: req.query.keyword, $options: "i" };
  }
  if (req.query.status) {
    find.status = req.query.status;
  }

  const numberDocument = await product.countDocuments(find);
  // Pagination

  const pagination = getPagination(req.query, 5, numberDocument);

  const listproduct = await product
    .find(find)
    .limit(pagination.numberOfProduct)
    .skip(pagination.positionProduct);

  // req.flash("info", "Welcome");

  res.render("admin/pages/order/index", {
    title: "order-page",
    message: "This is Home!",
    products: listproduct,
    // listOption: listOption,
    // keyword: req.query.keyword,
    pagination: pagination,
  });
};

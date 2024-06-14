const status1 = require("../../helpers/filterStatus");
const getPagination = require("../../helpers/getPagination");
const product = require("../../model/product.model");
const { ObjectID } = require("mongodb");

// const product = require("../../models/product.model");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  const listOption = status1.statusProduct(req.query);
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

  // Pagination
  const numberDocument = await product.countDocuments(find);
  const pagination = getPagination(req.query, 5, numberDocument);

  const listproduct = await product
    .find(find)
    .limit(pagination.numberOfProduct)
    .skip(pagination.positionProduct);

  // Detail
  let detailProduct;
  if (req.query.idDetail) {
    detailProduct = listproduct.find(
      (product) => product._id == req.query.idDetail
    );
  }
  // req.flash("info", "Welcome");

  res.render("admin/pages/products/index", {
    title: "pagedashboard",
    message: "This is Home!",
    products: listproduct,
    listOption: listOption,
    keyword: req.query.keyword,
    pagination: pagination,
    detailProduct1: detailProduct,
  });
};
// [PATCH] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.params.status;
  await product.updateOne({ _id: id }, { status: status });
  res.redirect("back");
};
// [DELETE] /admin/products/delete/:id
module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await product.updateOne({ _id: id }, { delete: "true" });
  res.redirect("back");
};
// [PUT] /admin/products/add
// module.exports.add = async (req, res) => {
//   let sizearr = [];

//   const size = req.body.size;
//   const stock = req.body.stock;
//   var i = 0;
//   if (Array.isArray(size)) {
//     size.forEach((element) => {
//       sizearr.push({ Value: element, stock: stock[i], _id: null });
//       i = i + 1;
//     });
//   } else {
//     sizearr.push({ Value: size, stock: stock, _id: null });
//   }
//   console.log(req.file);
//   let thumbnail = req.file.thumbnail;
//   if (thumbnail == "") {
//     thumbnail = null;
//   }
//   let image = req.body.images;
//   if (image == "") {
//     image = null;
//   }

//   let newproduct = {
//     title: req.body.title,
//     description: req.body.description,
//     price: parseInt(req.body.price),
//     stock: 100,
//     brand: req.body.brand,
//     category: req.body.category,
//     thumbnail: thumbnail,
//     images: image,
//     size: sizearr,
//     status: req.body.status,
//   };
//   const newProductModel = new product(newproduct);
//   await newProductModel.save((err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Product added successfully!");
//   });
// };
module.exports.add = async (req, res) => {
  try {
    let sizearr = [];

    const size = req.body.size;
    const stock = req.body.stock;
    var i = 0;
    if (Array.isArray(size)) {
      size.forEach((element) => {
        sizearr.push({ Value: element, stock: stock[i], _id: null });
        i = i + 1;
      });
    } else {
      sizearr.push({ Value: size, stock: stock, _id: null });
    }

    console.log(req.file);
    let thumbnail = req.file ? "/images/" + req.file.filename : null;
    if (thumbnail == "") {
      thumbnail = null;
    }
    let image = req.body.images;
    if (image == "") {
      image = null;
    }

    let newproduct = {
      title: req.body.title,
      description: req.body.description,
      price: parseInt(req.body.price),
      stock: 100,
      brand: req.body.brand,
      category: req.body.category,
      thumbnail: thumbnail,
      images: image,
      size: sizearr,
      status: req.body.status,
    };

    const newProductModel = new product(newproduct);
    await newProductModel.save();
    console.log("Product added successfully!");
    res.redirect("back");
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error adding product", error: err });
  }
};
// [GET] /admin/products
module.exports.edit = async (req, res) => {
  let condition = {};
  if (req.params.id) {
    condition._id = req.params.id;
  }
  const productItem = await product.findOne(condition);
  res.render("admin/pages/products/product-edit", {
    productItem: productItem,
  });
};
module.exports.update = async (req, res) => {
  try {
    console.log(req.body);
    let sizearr = [];

    const size = req.body.size;
    const stock = req.body.stock;
    var i = 0;
    if (Array.isArray(size)) {
      size.forEach((element) => {
        sizearr.push({ Value: element, stock: stock[i], _id: null });
        i = i + 1;
      });
    } else {
      sizearr.push({ Value: size, stock: stock, _id: null });
    }
    let thumbnail = req.file
      ? "/images/" + req.file.filename
      : req.body.thumbnail;
    let image = req.body.images;
    if (image == "") {
      image = null;
    }

    let newproduct = {
      title: req.body.title,
      description: req.body.description,
      price: parseInt(req.body.price),
      stock: 100,
      brand: req.body.brand,
      category: req.body.category,
      thumbnail: thumbnail,
      images: image,
      size: sizearr,
      status: req.body.status,
    };

    await product.updateOne({ _id: req.params.id }, { $set: newproduct });
    console.log("Product added successfully!");
    res.redirect("back");
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error adding product", error: err });
  }
};
module.exports.addNewProduct = async (req, res) => {
  res.render("admin/pages/products/product-add"), {};
};

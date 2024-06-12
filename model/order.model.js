const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerID: {
      type: String,
      required: false,
    },
    nameCustomer: {
      type: String,
      require: true,
    },
    priceTotal: {
      type: Number,
      required: true,
    },
    quantityTotal: {
      type: Number,
      required: true,
    },
    productArray: [
      {
        _idProduct: {
          type: String,
          require: true,
        },
        nameProduct: {
          type: String,
        },
        thumbnail: {
          type: String,
          require: true,
        },
        quantity: {
          type: Number,
          require: true,
        },
        size: {
          type: String,
          require: true,
        },
        price: {
          type: Number,
          require: true,
        },
        total: {
          type: Number,
          require: true,
        },
      },
    ],
    payMethod: {
      type: String,
      require: true,
      default: "Thanh Toán Khi Nhận Hàng",
    },
    date: {
      type: Date,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      default: "Chưa xác nhận",
    },
    delete: {
      type: String,
      default: "false",
    },
    id_staff: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);
const order = mongoose.model("order", orderSchema, "orders");

module.exports = order;

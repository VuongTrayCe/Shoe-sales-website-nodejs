const path = require("path");

module.exports = {
  entry: {
    main: "./public/js/admin/main.admin.js",
    product: "./public/js/admin/pages/products/product.admin.js",
    product_add: "./public/js/admin/pages/products/product.add.admin.js",
    product_client: "./public/js/client/pages/product.client.js",

    order: "./public/js/admin/pages/orders/order.admin.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development",
};

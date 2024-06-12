// ++++++++++++++++++++++++++Product-Page+++++++++++++++++++++++++++++++
// Add new Product
import "../common/pagination";
import { hasLetters } from "../../../validation/hasLetters"; // Assuming validation.js is in the same directory

const modalElement = document.getElementById("productModal");
if (modalElement) {
  const modalToggle = document.querySelector(".add_Product"); // Replace with your button ID
  const modal = new bootstrap.Modal(modalElement);
  modalToggle.addEventListener("click", function () {
    modal.show(); // Displays the modal
    const btnProductThumbnail = document.querySelector("#product_thumbnail");

    btnProductThumbnail.addEventListener("input", (e) => {
      const [file] = btnProductThumbnail.files;
      const preview_thumbnail = document.querySelector(
        ".preview-thumbnail img"
      );
      preview_thumbnail.src = URL.createObjectURL(file);
    });
    const btnClose = document.querySelector(".btnCloseFormAddProduct"); // Replace with your button ID
    btnClose.addEventListener("click", function () {
      const form = document.getElementById("cat_form");
      console.log(form);
      form.reset();

      modal.hide(); // Displays the modal
    });
  });
}
var btnDeleteSizeProduct;
const btnAddSizeProduct = document.querySelector(".btnAddSizeProduct");
btnAddSizeProduct.addEventListener("click", function () {
  const product_size = document.querySelector("#product-size");
  const product_stock = document.querySelector("#product-stock");
  const col1 = document.createElement("div");
  col1.classList.add("col-md-5");
  const col2 = document.createElement("div");
  col2.classList.add("col-md-5");
  const col3 = document.createElement("div");
  col3.classList.add("col-md-2");

  const formGroup1 = document.createElement("div");
  formGroup1.classList.add("form-group");
  formGroup1.classList.add("al");

  const formGroup2 = document.createElement("div");
  formGroup2.classList.add("form-group");

  const sizeLabel = document.createElement("label");

  sizeLabel.textContent = "Size: ";
  const sizeInput = document.createElement("input");
  sizeInput.setAttribute("name", "size");
  sizeInput.classList.add("form-control");

  const stockLabel = document.createElement("label");
  stockLabel.textContent = "stock: ";
  const stockInput = document.createElement("input");
  stockInput.setAttribute("name", "stock");

  stockInput.classList.add("form-control");

  const sizeSpan = document.createElement("span");
  const stockSpan = document.createElement("span");
  const flag =
    hasLetters(product_size.value) && hasLetters(product_stock.value);
  if (flag) {
    sizeInput.value = product_size.value;
    stockInput.value = product_stock.value;
    product_size.value = "";
    product_stock.value = "";
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-danger");
    btnDelete.classList.add("btnDeleteSizeProduct");
    btnDelete.setAttribute("type", "button");

    formGroup1.appendChild(sizeLabel);
    formGroup1.appendChild(sizeInput);

    formGroup1.appendChild(sizeSpan);
    formGroup2.appendChild(stockLabel);
    formGroup2.appendChild(stockInput);

    formGroup2.appendChild(stockSpan);

    col1.appendChild(formGroup1);
    col2.appendChild(formGroup2);
    col3.appendChild(btnDelete);
    col3.classList.add("pt-4");

    const row = document.createElement("div");
    row.classList.add("row");
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    const sps1 = document.getElementById("SizePriceStock");

    sps1.insertAdjacentElement("afterend", row);

    btnDelete.addEventListener("click", () => {
      row.remove();
    });
  } else {
    alert("Vui lòng nhập đúng định dạng");
  }
});
// Onchange for price input
const btnProductPrice = document.querySelector(".form-group #product_price");
const spanErrorProductPrice = document.getElementById("productPriceError");
btnProductPrice.addEventListener("input", () => {
  if (hasLetters(btnProductPrice.value) == false) {
    console.log("Vuong");

    spanErrorProductPrice.textContent = "Vui lòng nhập đúng định dạng!";
  } else {
    spanErrorProductPrice.textContent = "";
  }
});

const btnRadios = document.querySelectorAll('input[name="flexRadioDefault1"]');
btnRadios.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(btnRadios); //
  });
});
// Event Search-Status
var url = new URL(document.location.href);
const selectElement = document.getElementById("comboboxChangeStatus");
if (selectElement) {
  selectElement.addEventListener("change", () => {
    const selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex];
    if (selectedOption.value != "") {
      url.searchParams.set("status", selectedOption.value);
    } else {
      url.searchParams.delete("status");
    }
    document.location.href = url.href;
  });
}
// Event Product Detail
const btn2 = document.querySelectorAll(".product-img");
var siz4;
btn2.forEach((element) => {
  element.addEventListener("click", (e) => {
    var url = new URL(document.location.href);
    const newPath = element.getAttribute("path");

    // const newPath = url.href + element.getAttribute("path");
    // form.action = newPath;

    // form.submit();
    // url.searchParams.set("range", element.value);
    document.location.href = newPath;
  });
});
// Product Detail
const detail_Btn = document.querySelectorAll("[btn-data-detail]");

detail_Btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const idProduct = element.getAttribute("id_product");
    // const form = document.querySelector("#form_detail");
    // const path = form.getAttribute("data_path");
    // console.log(path);
    // const newPath = path + `/${idProduct}`;
    // form.action = newPath;
    // form.submit();
    const url3 = new URL(document.location.href);
    if (idProduct) {
      url3.searchParams.set("idDetail", idProduct);
      document.location.href = url3.href;
    }
    // const formDetaiProduct = document.querySelector(".detail_wrapper");
    // formDetaiProduct.style.display = "block";
  });
});
// Event-close-form-detail
const detail_Btn_Close = document.querySelector(".btnCloseDetail");
const url4 = new URL(document.location.href);
if (detail_Btn_Close) {
  detail_Btn_Close.addEventListener("click", (e) => {
    const tableProduct = document.querySelector(".tableProduct");

    const formDetaiProduct = document.querySelector(".detail_wrapper");
    formDetaiProduct.style.display = "none";
    tableProduct.style.width = "100%";

    url4.searchParams.delete("idDetail");
    window.history.pushState({}, "", url4);

    // document.location.href = url4.href;
  });
}
// Change status product
const btnChangeStatus = document.querySelectorAll(".btnStatusProduct");
btnChangeStatus.forEach((element) => {
  element.addEventListener("click", (e) => {
    const idProduct = element.getAttribute("id_product");
    const status = element.getAttribute("status");
    const newStatus = status == "active" ? "inactive" : "active";

    const form = document.querySelector("#form_change_status");
    const path = form.getAttribute("data_path_changestatus");
    console.log(path);
    const newPath = path + `/${newStatus}/${idProduct}?_method=PATCH`;
    form.action = newPath;

    form.submit();
  });
});
//  Delete Products

const btnDelete = document.querySelectorAll("[btn_delete]");
const confirmDialog = document.getElementById("confirmDialog");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
console.log("btnDelete");

if (btnDelete.length != 0) {
  btnDelete.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log("Vogn");
      confirmDialog.style.display = "block"; // Hiển thị dialog
      cancelBtn.addEventListener("click", () => {
        confirmDialog.style.display = "none"; // Hiển thị dialog
      });

      confirmBtn.addEventListener("click", () => {
        confirmDialog.style.display = "none"; // Hiển thị dialog
        const idProduct = element.getAttribute("id_product");
        const form = document.querySelector("#form_delete_product");
        const path = form.getAttribute("data_path_delete");
        const newPath = path + `/${idProduct}?_method=DELETE`;
        form.action = newPath;
        form.submit();
      });
    });
  });
}

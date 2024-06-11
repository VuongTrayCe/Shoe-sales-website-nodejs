// -----------------------------------Admin------------------------------
// Pagination Scripts
const page = document.querySelectorAll(".page-link");
page.forEach((element) => {
  element.addEventListener("click", (e) => {
    const url2 = new URL(document.location.href);
    console.log(url2);

    const index = element.getAttribute("value");
    if (index) {
      url2.searchParams.set("page", index);
      document.location.href = url2.href;
    }
  });
});
// form-search
const form_search = document.querySelector(".form-search");
if (form_search) {
  form_search.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = new URL(document.location.href);
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }
    document.location.href = url.href;
  });
}
// ++++++++++++++++++++++++++Product-Page+++++++++++++++++++++++++++++++
// Event search-status
var url = new URL(document.location.href);
const selectElement = document.getElementById("comboboxChangeStatus");
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
// event-close-form-detail
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

if (btnDelete.lengt != 0) {
  btnDelete.forEach((element) => {
    element.addEventListener("click", (e) => {
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

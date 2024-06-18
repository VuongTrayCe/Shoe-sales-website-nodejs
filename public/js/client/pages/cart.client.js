// const { response } = require("express");

const product = require("../../../../model/product.model")

const quantityCartInputs = document.querySelectorAll(".quantity-input")
const checkCartInputs = document.querySelectorAll(".check-input")
const productCarts = document.querySelectorAll(".product-in-cart")
const costProducts = document.querySelector(".cost-products-text")
const totalText = document.querySelector(".total-text")
// deletebutton.forEach(element => {
//     element.addEventListener(("click"),(e)=>{
//         console.log("ssss")
//         const productId = element.dataset.productId;
//         const size = element.dataset.productSize;
//         fetch('/cart/', {
//                 method: 'delete',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     productId,
//                     size
//                 }),
//             })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.success) {
//                     console.log('Quantity updated successfully');
//                 } else {
//                     console.error('Failed to update quantity');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//                    location.reload();
//     })
// });




// checkCartInputs.forEach((ele) => {
//             ele.addEventListener("change", (e) => {
//                 let quantity;
//                  const productId = ele.dataset.productId;
//                  const checked=ele.checked;
//                 const size = ele.dataset.productSize;
//                 console.log(size)
//                  updateCartQuantity(productId, quantity,size,checked);
//                  updateSubtotal()
//    })
//    })


// quantityCartInputs.forEach((ele) => {
//     ele.addEventListener("change", (e) => {
//         const productId = ele.dataset.productId;
//         const newQuantity = ele.value;
//         const size = ele.dataset.productSize;
//         let checked;
//         updateCartQuantity(productId,newQuantity,size,checked);
//         updateSubtotal()
//     })
// })
productCarts.forEach((productCart) => {

    const increasebtn=productCart.querySelector("#increase-button");

    const decreasebtn=productCart.querySelector("#decrease-button");
    const quantity = productCart.querySelector(".quantity-text");
    const price = productCart.querySelector("#price");
    const totalPrice = productCart.querySelector("#total-price");



    increasebtn.addEventListener("click",(e)=>{
        if(parseInt(quantity.innerHTML)<100){
            quantity.innerHTML = parseInt(quantity.innerHTML)+1;
            let size=quantity.dataset.productSize;
            let id=quantity.dataset.productId;
            updateCartQuantity(productId, parseInt(quantity.innerHTML), size)
            totalPrice.innerHTML=`$${parseInt(price.dataset.productValue)*parseInt(quantity.innerHTML)}`
            updateSubtotal();

        }
    })
     decreasebtn.addEventListener("click",(e) => {
        let size = quantity.dataset.productSize;
        let productId = quantity.dataset.productId;
         if (parseInt(quantity.innerHTML) > 1) {
             quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
             
             updateCartQuantity(productId, parseInt(quantity.innerHTML), size)
            totalPrice.innerHTML = `$${parseInt(price.dataset.productValue)*parseInt(quantity.innerHTML)}`
            updateSubtotal();

         }
         else{
            
          fetch('/cart/delete', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                    size
                }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Quantity updated successfully');
                } else {
                    console.error('Failed to update quantity');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
                   location.reload();  
         }
     })

})
function updateSubtotal(){
    let total=0;
    productCarts.forEach((productCart)=>{
            const price = productCart.querySelector("#price").dataset.productValue;
            const quantity = productCart.querySelector(".quantity-text").innerHTML;
            const productTotal=parseInt(price)*parseInt(quantity);
            total+=productTotal;




    })
    costProducts.innerHTML=`$${total}`
    totalText.innerHTML = `$${total}`

}
function updateCartQuantity(productId, quantity,size){

    fetch('/cart/update', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId,
                size,
                quantity,
            }),
        })
        .then(response => response.json())
        
        
}
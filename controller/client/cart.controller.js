const cartModel = require("../../model/cart.model")
const productModel = require("../../model/product.model")
module.exports.get=async (req,res,next)=>{
if (true) {
    try {
        const cart = await cartModel.findOne({
            customerId: "123",
        })
        const products=[];
        for (const item of cart.products) {
            const product = await productModel.findOne({
                    _id: item.productId
                });
                products.push({
                    title: product.title,
                    thumbnail: product.thumbnail,
                    size: item.size,
                    quantity: item.quantity,
                    price:product.price,
                    id:item.productId
                });
           }
        res.locals.cart = {_id:cart._id,products:products};
    } catch (err) {
        console.error(err);
        res.locals.cart = {_id:"null"}; 
    }
} else {
    res.locals.cart = {
        _id: "null"
    };
}
next();
};
module.exports.update = async (req, res) => {
    const {
        productId,
        size,
        quantity,
    } = req.body;
    // const userId = req.session.userId; // Adjust based on your session/auth setup
    try {
        const cart = await cartModel.findOne({
            customerId:"123"
        });
        if (cart) {
            const item = cart.products.find(item => (item.productId === productId && item.size === parseInt(size)));
            if (item) {
                item.quantity = quantity;
                await cart.save();
                return res.json({
                    success: true
                });
            }
        }
        res.json({
            success: false
        });
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({
            success: false
        });
    }
}
module.exports.index= async(req,res)=>{
     const cart = await cartModel.findOne({
               customerId: "123",
           })
           const products = [];
           let total=0;
           for (const item of cart.products) {
               const product = await productModel.findOne({
                   _id: item.productId
               });
               
                total = parseInt(total)+(item.quantity*product.price)
               products.push({
                   title: product.title,
                   thumbnail: product.thumbnail,
                   size: item.size,
                   quantity: item.quantity,
                   price: product.price,
                   id: item.productId,
               });
           }
    res.render("client/page/cart/index",{
        products:products,
        total:total,

    })


}
module.exports.add = async(req,res)=>{
        let flag=true;

       const cart = await cartModel.findOne({
           customerId: "123"
       });
       if (cart) {
           const item = cart.products.find(item => (item.productId === req.body.id && item.size === parseInt(req.body.size)));
           if (item) {
                flag=false;
                item.quantity = (parseInt(item.quantity) + parseInt(req.body.quantity));
                await cart.save();
               }
            }
    if(flag){
        cartModel.findOneAndUpdate(
            {
                customerId:"123"
            },
            {
                $push: {
                    products: {
                        productId: req.body.id,
                        size: req.body.size,
                        quantity: req.body.quantity,
                    }
                }
            }
        ).then(updatedCart => {
               ;
            })
            .catch(error => {
               
            });

    res.redirect("back");
}

}
module.exports.delete = async (req, res) => {
       const {
           productId,
            size
       } = req.body;
    cartModel.findOneAndUpdate({
            customerId: "123"
        }, {
            $pull: {
                products: {
                    productId: productId,
                    size: size,
                }
            }
        })
        .then(updatedCart => {
       
        })
        .catch(error => {
        
        });
    console.log(req.body)
}


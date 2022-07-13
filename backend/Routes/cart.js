const express = require("express");
const {addItemToCart,addToCart,getCart,removeCartItems,} = require("../RequestFunctions/cart");
const { requirelogin, userMiddleware } = require("../Common-Middleware/CommonMiddleware");
const router = express.Router();

router.post("/user/cart/addtocart", addItemToCart);
router.post("/user/cart/removecartItem", removeCartItems);
router.get("/user/cart/getcart/:montu", getCart);

//router.post('/user/cart/addToCartByLogin', requirelogin, userMiddleware, addToCart);

// router.post("/user/getCartItems", requirelogin, getCartItems);

// //new update
// router.post("/user/cart/removeItem",requirelogin,  removeCartItems);

module.exports = router;
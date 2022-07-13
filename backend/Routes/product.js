const express = require('express');
const Products = require('../Schema/ProductSchema');
const app = express();
const router = express.Router();
const {requirelogin,adminMiddleware,superAdminMiddleware,} = require("../common-middleware/CommonMiddleware");
const {addProducts , getProductsofseller,getproductbyid, getAllProducts,getcategoryProducts,getunsoldProducts,removeOneProduct} = require('../RequestFunctions/product');
const multer = require('multer');
const path = require('path');
var fs = require('fs');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname , '../uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })
app.use(express.static('../uploads'));



router.post("/products/create",upload.array('photos'), addProducts );
router.get("/products/getproductsofseller", getProductsofseller);
router.get("/products/getallproducts", getAllProducts);
router.get("/products/getproduct/:id", getproductbyid);
router.get("/products/category/:slug", getcategoryProducts);
router.post("/products/getunsold", getunsoldProducts);
router.post("/products/getunsold/remove", removeOneProduct);

module.exports = router;


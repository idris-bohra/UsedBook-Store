const express = require('express');
const router = express.Router();
const {requirelogin,adminMiddleware,superAdminMiddleware,} = require("../common-middleware/CommonMiddleware");
const {addCategory, getCategories, updateCategories, deleteCategories} = require("../RequestFunctions/category");

router.get("/category/getcategory", getCategories);

router.post("/category/create",addCategory);

module.exports = router;
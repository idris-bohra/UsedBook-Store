const express = require('express');
const { sellersignup , sellerlogin } = require('../RequestFunctions/sellerAccount');
const router = express.Router();


router.post('/sellersignup',sellersignup);
router.post('/sellerlogin',sellerlogin);

module.exports = router;
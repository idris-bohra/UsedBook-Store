const express = require('express');
const { otpvalidator } = require('../RequestFunctions/otpvalidator');
const router = express.Router();


router.post('/authenticate',otpvalidator);

module.exports = router;
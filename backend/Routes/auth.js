const express = require('express');
const { signup, login } = require('../RequestFunctions/auth');
const { validateSignupRequest, isRequestValidated, validateloginRequest } = require('../Validator/validation');
const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/login',validateloginRequest, isRequestValidated, login);

module.exports = router;
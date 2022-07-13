const { check,body, validationResult } = require('express-validator');

exports.validateSignupRequest = [
    // check('firstName')
    // .notEmpty()
    // .withMessage('firstName is required'),
    // check('lastName')
    // .notEmpty()
    // .withMessage('lastName is required'),
    // check('lastName'),
    // check('email')
    // .isEmail()
    // .withMessage('Valid Email is required'),
    // check('password')
    // .isLength({ min: 6 })
    // .withMessage('Password must be at least 6 character long')

    body('firstname').not().isEmpty(),
    body('lastname').not().isEmpty(),
    body('username').not().isEmpty(),
    body('contactnumber').not().isEmpty(),
    body('emailid').isEmail(),
    body('password').isLength({ min: 5 })
];

exports.validateloginRequest = [
    // check('email')
    // .isEmail()
    // .withMessage('Valid Email is required'),
    // check('password')
    // .isLength({ min: 6 })
    // .withMessage('Password must be at least 6 character long')

    body('emailid').isEmail(),
    body('password').isLength({ min: 5 })
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()})
    }
    next();
}
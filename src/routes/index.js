let express = require("express");
let router = express.Router();
let product= require('./product')
let user =require('./user')
let payment = require('./payment')


router.use('/product',product)
router.use('/user',user)
router.use('/payment', payment)

module.exports = router;
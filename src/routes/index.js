let express = require("express");
let router = express.Router();
let product= require('./product')
let user =require('./user')
let users = require('./users')
let payment = require('./payment')
let comment = require('./comment')
let stock = require('./stock')



router.use('/product', product)
router.use('/user', user)
router.use('/users', users)
router.use('/payment', payment)
router.use('/comment', comment)
router.use('/stock', stock)

module.exports = router;
let express = require("express");
let router = express.Router() ;
//let simpleResponse =require('../middleware/simpleresponse');
const postProduct = require('../Controllers/postProduct.js');
const getProductDB = require("../Controllers/DBgetProducts.js");
const getProductById = require("../Controllers/getProductById");
const orderProductByBrand = require('../Controllers/orderProductByBrand');
const orderByPrice = require("../Controllers/orderProductByPrice");


router.get('/',  getProductDB)
router.get('/:id', getProductById)
router.post('/add', postProduct)
//router.patch('/',simpleResponse)
router.get('/orderName', orderProductByBrand )
router.get('/orderPrice', orderByPrice )


module.exports = router;
let express = require("express");
let router = express.Router() ;
const postProduct = require('../Controllers/postProduct.js');
const getProductDB = require("../Controllers/DBgetProducts.js");
const getProductById = require("../Controllers/getProductById");
const orderProductByBrand = require('../Controllers/orderProductByBrand');
const orderByPrice = require("../Controllers/orderProductByPrice");
const hideProduct = require('../Controllers/hideProduct')
const restoreProduct = require('../Controllers/restoreProduct')



router.get('/',  getProductDB)
router.get('/:id', getProductById)
router.post('/add', postProduct)
router.put('/hide', hideProduct)
router.put('/restore', restoreProduct)
router.get('/orderName', orderProductByBrand )
router.get('/orderPrice', orderByPrice )



module.exports = router;

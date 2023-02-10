let express = require("express");
let router = express.Router() ;
const processPayment = require('../Controllers/processPayment.js')

router.post('/', processPayment)

module.exports = router;
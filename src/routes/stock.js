let express = require("express");
let router = express.Router() ;
const stockControl = require('../Controllers/stockControl')

router.get('/:postedBy&:limit', stockControl)

module.exports = router;
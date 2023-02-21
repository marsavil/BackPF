let express = require("express");
let router = express.Router();
const getUsers = require("../Controllers/getUsers");


router.get('/', getUsers)

module.exports = router
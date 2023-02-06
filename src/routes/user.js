let express = require("express");
let router = express.Router();
let simpleResponse = require("../middleware/simpleresponse");
let createUser = require("../Controllers/postUser.js")
let getUser = require("../Controllers/getUser.js")

router.get("/:id", getUser);
router.post("/signup", createUser);
router.patch("/", simpleResponse);

module.exports = router;
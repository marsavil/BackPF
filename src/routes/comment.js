let express = require("express");
let router = express.Router();
const postComment = require('../Controllers/postComment');
const getComments = require('../Controllers/getComments');
const hideComment = require("../Controllers/hideComment");
const restoreComment = require('../Controllers/restoreComment')


router.post('/', postComment);
router.get('/', getComments);
router.get('/:id', getComments);
router.put('/hide',hideComment);
router.put('/restore',restoreComment)

module.exports = router;
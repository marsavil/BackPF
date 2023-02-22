const {Router} = require('express');
const router = Router();
const Comment = require('../models/Comment');

const addComment = async(req, res) =>{
  const {text, moderated, postedBy, product} = req.body

  try {
    let commentToAdd = await Comment.create({
      text,
      moderated,
      postedBy,
      product,
      visible : true
    })
    res.status(200).send("Comment submitted successfully!");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error creating the product.");
  }
}
module.exports = addComment
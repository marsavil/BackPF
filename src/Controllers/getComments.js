const Comment = require('../models/Comment');


const getComments = async(req, res) =>{
  const id = req.params.id
  if(id){
    try {
      const comments = await Comment.findAll({
        where :{
          product : id,
          visible : true
        }
      })
      res.status(200).send(comments)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }else{
    try {
      const comments = await Comment.findAll()
      res.status(200).send(comments)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
  
}

module.exports = getComments;
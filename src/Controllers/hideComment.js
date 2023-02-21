const Comment = require('../models/Comment');

const hideComment = async(req, res) => {
  
  const {id} = req.body
  
  try {
    const comment = await Comment.findOne({
      where: {
        id: id}
      })
    
    comment.visible = false
    await comment.save()
    res.status(200).send('Comentario oculto')
  } catch (error) {
    
    res.status(400).send(error)
  }
};

module.exports = hideComment;

const Comment = require('../models/Comment');

const restoreComment = async(req, res) => {
  
  const {id} = req.body
  
  try {
    const comment = await Comment.findOne({
      where: {
        id: id}
      })
    
    comment.visible = true
    await comment.save()
    res.status(200).send('Comentario restaurado')
  } catch (error) {
    
    res.status(400).send(error)
  }
};

module.exports = restoreComment;
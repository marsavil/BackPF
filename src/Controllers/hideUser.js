const User = require('../models/User');

const hideUser = async(req, res) => {
  
  const {id} = req.body
  
  try {
    const user = await User.findOne({
      where: {
        id: id}
      })
    
    user.visible = false
    await user.save()
    res.status(200).send('Usuario oculto')
  } catch (error) {
    
    res.status(400).send(error)
  }
};

module.exports = hideUser;
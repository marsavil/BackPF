const User = require('../models/User');

const restoreUser = async(req, res) => {
  
  const {id} = req.body
  
  try {
    const user = await User.findOne({
      where: {
        id: id}
      })
    
    user.visible = true
    await user.save()
    res.status(200).send('Usuario restaurado')
  } catch (error) {
    
    res.status(400).send(error)
  }
};

module.exports = restoreUser;
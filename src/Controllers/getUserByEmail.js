const User = require("../models/user.js");

const getUserByEmail = async (req, res) => {
  const {email, password} = req.params;
  if(!password){
    try {
    
      const search = await User.findOne({
        where: {
          email: email,
        },
      });
        res.status(200).send(search);
      
    } catch (error) {
      res.status(400).send(error);
    }
  }else{
    try {
      const search = await User.findOne({
        where: {
          email: email,
          password: password
        },
      });
        res.status(200).send(search);
      
    } catch (error) {
      res.status(400).send(error);
  }
}
};
module.exports = getUserByEmail;

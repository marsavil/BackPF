const User = require("../models/user.js");

const getUserByEmail = async (req, res) => {
  const {email} = req.params;

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
};
module.exports = getUserByEmail;

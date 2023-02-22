
const Users = require("../models/user.js");


const getUsers = async (req, res) => {
  const id = req.params.id
  if(id){
    try {
      const search = await Users.findOne({
        where:{
          id :id
        }
      });
      res.status(200).send(search);
    } catch (error) {
      res.status(400).send(error);
    }
  }else{
    try {
      const search = await Users.findAll();
      res.status(200).send(search);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  
};
module.exports = getUsers;

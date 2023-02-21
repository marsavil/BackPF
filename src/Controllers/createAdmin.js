const  User = require('../models/user.js');
const { v4: uuidv4 } = require("uuid");

const createAdmin = () => {
  const code = uuidv4()
  User.create({
    name : "The Cell Market",
    isAdmin : true,
    password : "proyectoFinal",
    email : "vendotelefonos123@gmail.com",
    code : code,
    status : "VERIFIED",
    visible : true,
  })
};

module.exports = createAdmin



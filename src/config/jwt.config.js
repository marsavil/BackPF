
const jwt = require('jsonwebtoken');
require('dotenv').config()

const getToken = (payload) => {
    return jwt.sign({
        data: payload
    }, process.env.JWT, { expiresIn: '1h' });
}

const getTokenData =(token)=>{
  let data = null 
  jwt.verify(token, process.env.JWT,(err,decoded)=>{
    if(err){
      console.log("Error al obtener data del Token")
    }else{
      data=decoded
    }
  })
  return data;
}


module.exports={
  getToken,
  getTokenData
}
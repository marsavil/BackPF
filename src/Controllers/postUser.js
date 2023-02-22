const  User = require('../models/user.js');
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const { getToken, getTokenData } = require("../config/jwt.config");
const { getTemplate, sendEmail } = require("../config/mail.config");


const createUser = async(req, res) => {
    try {
        const { name, email, isAdmin , password, image } = req.body;
  
        let user = await User.findOne({
          where: {
            [Op.or]: [{ name: req.body.name, email: req.body.email }],
          },
        });
  
        if (user !== null) {
          return res.json({
            success: false,
            msg: "Usuario ya existe",
          });
        }
  
        const code = uuidv4();
  
        user = new User({ name, email,isAdmin, code, password, image, visible :true });
  
        const token = getToken({ email, code });
  
        const template = getTemplate(name, token);
        
        await sendEmail(email, "Confirma Tu Cuenta", template);
        await user.save();
  
        res.json({
          success: true,
          msg: "Registrado correctamente",
        });
      } catch (error) {
        console.log(error);
        return res.json({
          success: false,
          msg: "Error al registrar usuario",
        });
      }
    };
		
    const confirm = async (req, res) => {
      try {
        const { token } = req.body;
        
        const data =  getTokenData(token);
        
				
        if (data === null) {
          return res.json({ success: false, msg: "Error al obtener data " });
        }

        const { email, code } = data.data;
    
        const user = await User.findOne({
          where: {
            [Op.and]: [{ code: code }],
          },
					
        });
        if (user === null) {
          return res.json({
            success: false,
            msg: "Usuario no existe",
          });
        }
        if (code !== user.code) {
          return res.redirect("/error.html");
        }
        user.status = "VERIFIED";
        await user.save();
        return res.redirect("http://localhost:3000/home");
        //return res.redirect("")
      } catch (error) {
        return res.json({
          success: false,
          msg: "Error al confirmar usuario",
        });
      }
    };
    

  module.exports = {
    createUser,
    confirm
  }
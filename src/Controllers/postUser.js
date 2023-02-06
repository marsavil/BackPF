
const  User = require('../models/user.js');

const createUser = async(req, res) => {
    const { name, isAdmin, email, password } = req.body;
    const userNameValidation = await User.findOne({
        where: {
            name: name
        }
    })
    const emailValidation = await User.findOne({
        where: {
            email: email
        }
    })

    if(userNameValidation){
        return res.send(`${name} is not available for user name`)
    } 
    else if(emailValidation){
        return res.send(`${email} is already registered`)
    }
    else {
        try{
            let createUser = await User.create({
                name,
                isAdmin,
                email,
                password
            })
    
            res.status(200).send(`User ${name} created successfully`)
        }
        catch(err){
            console.log(err);
            res.status(400).send('Error creating user.')
        }
    }
    
};
module.exports = createUser;
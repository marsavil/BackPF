
const  User = require('../models/user.js');


const getUser = async(req, res)=>{
    const id = req.params.id;
    try {
        const search = await User.findOne({
            where: {
                id: id
            }
        })
        res.status(200).send(search)

    } catch (error) {
        res.status(400).send(error)
    } 
}
module.exports = getUser;
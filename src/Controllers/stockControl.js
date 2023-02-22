const Product = require("../models/product.js");

const stockControl = async(req,res)=>{
    const {postedBy, limit} = req.params;
    try {
      const products = await Product.findAll({
        where:{
          postedBy : postedBy,
        }
      })
      const runningOut = products.filter(p => p.stock < limit)
      res.status(200).send(runningOut)
    } catch (error) {
      res.status(400).send(error)
    }
};
module.exports = stockControl;

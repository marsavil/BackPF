const product = require("../models/product.js");

const getProductDB = async(req,res)=>{
    const {name} = req.query;
    console.log(name)
    if(name){
        try {
            const products = await product.findAll();
            let searchResult = products.filter(p => p.model.toUpperCase().includes(name.toUpperCase()))
            res.status(200).send(searchResult)
        } catch (error) {
            res.status(400).send({error: error.message})
        }
    }else{
        try {
            const products = await product.findAll();
            res.status(200).send(products)
        } catch (error) {
            res.status(400).send({error: error.message})
        }
    }
    
}
module.exports = getProductDB;
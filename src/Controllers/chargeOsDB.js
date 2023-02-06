const Os = require("../models/os");
const Product = require("../models/product")
const getProductsApi = require("../Controllers/getProductApi");

const chargeOsDB = async()=>{
    const allProducts = await Product.findAll();
    allProducts.forEach(async (e)=>{
       await Os.findOrCreate({
        where:{
            name: e.os,
            productId: e.id
        }
       })
    })
}
module.exports = chargeOsDB;
//const Brand = require("../models/brand");
const Product = require("../models/product")
const getProductsApi = require("../Controllers/getProductApi");

const chargeBrandsDB = async()=>{
    const allProducts = await Product.findAll();
    allProducts.forEach(async (e)=>{
       await Brand.findOrCreate({
        where:{
            name: e.marca,
            productId: e.id
        }
       })
    })
}
module.exports = chargeBrandsDB;
const Product = require("../models/product")


const getProductById = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findOne({
            where: {
                id: id
            }
        });
        if(product){
            res.status(200).send(product)
        }else{
            res.status(404).send('No existe el producto solicitado')
        }
        
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
module.exports =  getProductById;
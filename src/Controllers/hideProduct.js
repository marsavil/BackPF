const Product = require('../models/product');

const hideProduct = async(req, res) => {
  
  const {id} = req.body
  
  try {
    const product = await Product.findOne({
      where: {
        id: id}
      })
    
    product.visible = false
    await product.save()
    res.status(200).send('Producto oculto')
  } catch (error) {
    
    res.status(400).send(error)
  }
};

module.exports = hideProduct;
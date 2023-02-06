const Product = require('../models/product')

const orderProductByPrice = async (req, res) => {
    let priceOrder = req.body.priceOrder;
    const allProducts = await Product.findAll()

    try {
        if (priceOrder === 'ASC') {

            allProducts.sort(function (a, b) {
                if (a.price > b.price) {
                    return 1;
                }
                if (b.price > a.price) {
                    return -1;
                }
                return 0;
            })
        }
        res.send(allProducts)
    } catch (e) {
        res.send(e)
    }
}

module.exports = orderProductByPrice;
const mercadopago = require('mercadopago')

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY})

const payment = (req,res) => {
    const {product}= req.body;
    const preference = {
        items : [{
            id : product.id,
            title : product.model,
            currency_id : 'ARS',
            picture_url : product.image,
            description : product.marca +' '+ product.model,
            category_id : 'cellPhones',
            quantity: req.body.quantity,
            unit_price: product.price 
        }],
        back_urls : {
            success : 'http://localhost/3000/home',
            failure : '',
            pending : '',
        },
        auto_return : 'approved',
        binary_mode : true,
    }
    mercadopago.preferences.create(preference)
    .then((response) => res.status(200).send({response}))
    .catch((error) => res.status(400).send({error: error.message}))
}

module.exports = payment;
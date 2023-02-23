const mercadopago = require("mercadopago");
const product = require("../models/product");
const Product = require('../models/product')

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const payment = async (req, res) => {
  const products = req.body.items;
  const preference = await {
    items: products.map((p) => {

      return {
        id: p.id,
        title: p.model,
        currency_id: "ARS",
        picture_url: p.image,
        description: p.marca + " " + p.model,
        category_id: "cellPhones",
        quantity: p.quantity,
        unit_price: p.price,
      };
    }),
    back_urls: {
      success: "https://frontpf-production-eafa.up.railway.app/payment",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  
  
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
};

module.exports = payment;

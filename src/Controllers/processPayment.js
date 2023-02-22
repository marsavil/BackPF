const mercadopago = require("mercadopago");

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const payment = (req, res) => {
  const products = req.body.items;
  const preference = {
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
      success: "http://localhost:3000/payment",
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

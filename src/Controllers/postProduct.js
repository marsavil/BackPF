const { Router } = require("express");
const router = Router();
const Product = require("../models/product");

const addProduct = async (req, res) => {
  const {
    marca,
    model,
    price,
    color,
    ram,
    camera,
    image,
    condition,
    os,
    stock,
    postedBy
  } = req.body;
  try {
    let createProduct = await Product.create({
      marca,
      model,
      condition: condition.toLowerCase(),
      price,
      color,
      ram,
      image,
      camera,
      stock,
      os,
      postedBy, 
      visible : true
    });

    res.status(200).send("Product created successfully!");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error creating the product.");
  }
};

module.exports = addProduct;

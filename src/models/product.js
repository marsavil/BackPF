const { DataTypes, ENUM } = require("sequelize");

const sequelize = require("../db");

const product = sequelize.define("product", {
  
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  condition:{
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false
  },
  camera: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  os: {
    type: DataTypes.ENUM('Android', 'IOS'),
    allowNull: false

  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = product;

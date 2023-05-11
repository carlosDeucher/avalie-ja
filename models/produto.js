import { Sequelize } from "sequelize";
import database from "config/postgresdb";
import Users from "./user";

const Products = database.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productLink: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  images: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Users.hasMany(Products, {
  constraints: true,
  foreignKey: "idUser",
});
export default Products;

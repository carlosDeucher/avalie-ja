import { Sequelize } from "sequelize";
import database from "config/postgresdb";
// import Comments from "./comment";
// import Products from "./produto";

const Users = database.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  region: Sequelize.STRING,
});

// Users.hasMany(Comments, {
//   constraints: true,
//   foreignKey: "idUsers",
// });

// Users.hasMany(Products, {
//   constraints: true,
//   foreignKey: "idProduct",
// });

export default Users;

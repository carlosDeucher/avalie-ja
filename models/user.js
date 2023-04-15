import { Sequelize } from "sequelize";
import database from "config/postgresdb";
// import Comment from "./comment";
// import Produto from "./produto";

const User = database.define("users", {
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

// User.hasMany(Comment, {
//   constraints: true,
//   foreignKey: "idUsers",
// });

// User.hasMany(Produto, {
//   constraints: true,
//   foreignKey: "idProduct",
// });

export default User;

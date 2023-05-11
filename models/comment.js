import { Sequelize } from "sequelize";
import database from "config/postgresdb";
import Users from "./user";
import Products from "./produto";

const Comments = database.define("comments", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  likes: { type: Sequelize.INTEGER },
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
});
Users.hasMany(Comments, {
  constraints: true,
  foreignKey: "idUser",
});
Products.hasMany(Comments, {
  constraints: true,
  foreignKey: "idProduct",
});
export default Comments;

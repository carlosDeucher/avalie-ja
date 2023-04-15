import { Sequelize } from "sequelize";
import database from "config/postgresdb";
import User from "./user";
import Produto from "./produto";

const Comment = database.define("comments", {
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
User.hasMany(Comment, {
  constraints: true,
  foreignKey: "idUser",
});
Produto.hasMany(Comment, {
  constraints: true,
  foreignKey: "idProduct",
});
export default Comment;

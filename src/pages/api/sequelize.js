import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database-1', 'postgres', process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    post:'5432',
    logging: (...msg) => console.log(msg),
  });
 
  export default async function teste(req, res) {
    console.log(process.env.DB_PASSWORD) 
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
     res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.status(500).json({ name: 'Erro' })

  }
   
  }
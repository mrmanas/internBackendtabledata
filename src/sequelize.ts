import { Sequelize } from 'sequelize';

// Create a new Sequelize instance
const sequelize = new Sequelize('data', 'root', 'manas', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log, // Enable SQL logging
});

export default sequelize;

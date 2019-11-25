require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.SEQUELIZE_DEV_PW,
    database: 'local-login',
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
  },
  production: {
    username: 'root',
    database: 'local-login',
    password: process.env.SEQUELIZE_PRO_PW,
    port: 3306,
    host: '',
    dialect: 'mysql',
    operatorsAliases: 'false',
    logging: false,
  },
};


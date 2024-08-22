const databaseConfig = {
  db: process.env.DB,
  username: process.env.ROOT,
  password: process.env.PASSWORD,
  host: process.env.USERNAME,
  port: 3306,
  dialect: "mysql",
};

module.exports = databaseConfig;

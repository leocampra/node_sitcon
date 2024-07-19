require("dotenv").config();

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  module.exports = {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  };
}

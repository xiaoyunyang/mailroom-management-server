const dbConfig = {
  development: {
    username: "root",
    password: "password",
    database: "mailroom_management",
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: "password",
    database: "mailroom_management",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: "postgres",
  },
};

export default dbConfig;

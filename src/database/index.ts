import { Sequelize } from "sequelize";
import { logger } from "../utils/logger";
import UserModel from "../models/user.model";
import PackageModel from "../models/package.model";
import ApartmentModel from "../models/apartment.model";
import BuildingModel from "../models/building.model";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../config/db");

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
  dialect: config[env].dialect,
  timezone: "+09:00",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    underscored: true,
    freezeTableName: true,
  },
  pool: config[env].pool,
  logQueryParameters: env === "development",
  logging: (query, time) => {
    logger.info(time + "ms" + " " + query);
  },
  benchmark: true,
});

sequelize
  .authenticate()
  .then(() => {
    logger.info("🟢 The database is connected.");
  })
  .catch((error: Error) => {
    logger.error(`🔴 Unable to connect to the database: ${error}.`);
  });

const User = UserModel(sequelize);
const Apartment = ApartmentModel(sequelize);
const Package = PackageModel(sequelize);
const Building = BuildingModel(sequelize);

// 1:1
Package.belongsTo(User, { foreignKey: "pickup_by" });
User.hasOne(Package, { foreignKey: "pickup_by" });

// 1:M
Apartment.hasMany(Package, { foreignKey: "apartment_id" });
Package.belongsTo(Apartment, { foreignKey: "apartment_id" });

// N:M
User.belongsToMany(Apartment, { through: "apartment_user", foreignKey: "user_id" });
Apartment.belongsToMany(User, { through: "apartment_user", foreignKey: "apartment_id" });

// N:M
User.belongsToMany(Building, { through: "building_user", foreignKey: "user_id" });
Building.belongsToMany(User, { through: "building_user", foreignKey: "building_id" });

// 1:M
Building.hasMany(Apartment, { foreignKey: "building_id" });
Apartment.belongsTo(Building, { foreignKey: "building_id" });


const DB = {
  User,
  Package,
  Apartment,
  Building,
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;

import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { Package } from "../interfaces/package.interface";
import { UUID } from "../interfaces/types";

type Attribute = "delivered_date" | "pickup_date"

export class PackageModel extends Model<Package, Optional<Package, Attribute>> implements Package {
  public id: UUID;
  public delivered_date: Date;
  public pickup_date: Date;

  // Foreign Key
  public apartment_id: UUID;
  public pickup_by: UUID;

  // Auto-generated
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof PackageModel {
  PackageModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      delivered_date: { // equal to created_date
        type: DataTypes.DATE,
        allowNull: false,
      },
      pickup_date: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "packages",
      underscored: true,
      sequelize,
    },
  );


  return PackageModel;
}

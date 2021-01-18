import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { UUID } from "../interfaces/types";
import { Building } from "../interfaces/building.interface";

type Attribute = "id"
  | "address"
  | "name"


export class BuildingModel extends Model<Building, Optional<Building, Attribute>> implements Building {
  public id: UUID;
  public address: string;
  public name: string;

  // Auto-generated
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof BuildingModel {
  BuildingModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "buildings",
      underscored: true,
      sequelize,
    },
  );

  return BuildingModel;
}

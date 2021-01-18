import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { Apartment } from "../interfaces/apartment.interface";
import { UUID } from "../interfaces/types";

type Attribute = "apartment_number"


export class ApartmentModel extends Model<Apartment, Optional<Apartment, Attribute>> implements Apartment {
  public id: UUID;
  public apartment_number: string;

  // Foreign Key
  public building_id: UUID;

  // Auto-generated
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof ApartmentModel {
  ApartmentModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      apartment_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "apartments",
      underscored: true,
      sequelize,
    },
  );

  return ApartmentModel;
}

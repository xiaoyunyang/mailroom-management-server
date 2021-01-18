import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { UUID } from "../interfaces/types";
import { User } from "../interfaces/user.interface";

type Attribute = "id"
  | "password"
  | "email"
  | "email_verified"
  | "phone_number"
  | "phone_number_verified"
  | "email_notif_opt_in"
  | "sms_notif_opt_in";

export class UserModel extends Model<User, Optional<User, Attribute>> implements User {
  public id: UUID;
  public password: string;
  public email: string;
  public email_verified: boolean;
  public phone_number: number;
  public phone_number_verified: boolean;
  public email_notif_opt_in: boolean;
  public sms_notif_opt_in: boolean;

  // Auto-generated
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      phone_number_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      email_notif_opt_in: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      sms_notif_opt_in: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    },
    {
      tableName: "users",
      underscored: true,
      sequelize,
    },
  );

  return UserModel;
}

import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/db";
import e from "express";

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    public toJSON() {
        const values = { ...this.get() };
        delete values.password;
        return values;
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: false,
    }
);

export default User;
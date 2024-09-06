import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../config/db';
import User from './user';

class Task extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public completed!: boolean;
    public createdAt!: Date;
    public userId!: number;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Task',
        tableName: 'tasks',
        timestamps: false,
    }
);

export default Task;
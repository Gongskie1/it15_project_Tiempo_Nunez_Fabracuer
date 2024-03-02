const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/Conn");


const Student = sequelize.define("users",
{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Student
const { DataTypes } = require('sequelize');

const sequelize = require('../db')

const Category = sequelize.define('category', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
});

module.exports = Category
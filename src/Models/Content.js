const { DataTypes } = require('sequelize');

const sequelize = require('../db')

const Content = sequelize.define('content', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    release: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
});

module.exports = Content
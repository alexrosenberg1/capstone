const Sequelize = require('sequelize');
const config = require('../config');

const cars = config.define('cars', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    des: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    photo: {
        type: Sequelize.BLOB,
        allowNull: false
    },

    lkm: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    gasType: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    nSeats: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    nDoors: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    addFeat: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    carType: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    make: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    brand: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },

    year: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    }
}, {timestamps: false});

module.exports = cars;
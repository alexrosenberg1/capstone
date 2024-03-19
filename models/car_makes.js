const Sequelize = require('sequelize');
const config = require('../config');

const carMakes = config.define('carMakes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }

    //make: {
    //    type: Sequelize.STRING,
    //    autoIncrement: false,
    //    allowNull: false,
    //    primaryKey: false
    //},

    //year: {
    //    type: Sequelize.STRING,
    //    autoIncrement: false,
    //    allowNull: false,
    //   primaryKey: false
    //},

    //brand: {
    //    type: Sequelize.STRING,
    //    autoIncrement: false,
    //    allowNull: false,
    //    primaryKey: false
    //}
}, {timestamps: false});

module.exports = carMakes;
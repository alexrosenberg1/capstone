const Sequelize = require('sequelize');
const config = require('../config');

const carTypes = config.define('carTypes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    build: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false});

module.exports = carTypes;
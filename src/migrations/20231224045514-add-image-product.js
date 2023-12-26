"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.addColumn("products", "imageURL", {
                type: Sequelize.DataTypes.STRING,
            }),
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.removeColumn("products", "imageURL"),
        ]);
    },
};

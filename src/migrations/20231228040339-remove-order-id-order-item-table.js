"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.removeColumn("order_items", "order_id"),
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.addColumn("order_items", "order_id", {
                type: Sequelize.DataTypes.STRING,
            }),
        ]);
    },
};

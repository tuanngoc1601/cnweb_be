"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.addColumn("orders", "order_item_id", {
                type: Sequelize.DataTypes.INTEGER,
            }),
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.removeColumn("orders", "order_item_id"),
        ]);
    },
};

"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert("cart_items", [
            {
                user_id: 1,
                product_id: 95,
                quantity: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: 1,
                product_id: 112,
                quantity: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: 1,
                product_id: 117,
                quantity: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};

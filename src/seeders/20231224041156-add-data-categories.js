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
        await queryInterface.bulkInsert("categories", [
            {
                name: "Drinks",
                description: "drinks",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Deserts",
                description: "deserts",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Fruits",
                description: "fruits",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Rice",
                description: "rice",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Curry",
                description: "curry",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Chinese",
                description: "chinese",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Bread",
                description: "bread",
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

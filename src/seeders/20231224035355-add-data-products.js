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
        await queryInterface.bulkInsert("products", [
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fstrawberries.png?alt=media&token=7d4a0fe8-0e1f-4860-befd-39f3db012d76",
                name: "Strawberries",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "18.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fpine.png?alt=media&token=5f28d5e2-fee2-4349-b3f0-32d50746cf65",
                name: "Pine Apple",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fblueberries.png?alt=media&token=64c693be-e582-47e8-8b2c-370be5cbeca3",
                name: "Blue Berries",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "19.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fgrapes.png?alt=media&token=2b98d01f-99bc-4265-8eeb-61d4cd8f389e",
                name: "Grapes",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "12.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fpomegranate.png?alt=media&token=957232b3-a2ff-4dce-a8cd-d32a9483074a",
                name: "Pomegranate",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "26.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fmulberry.png?alt=media&token=0e486e74-3946-4b2a-bd35-89bfcaddba73",
                name: "Muberries",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "20.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fbanana.png?alt=media&token=3e4d45fc-c359-4a4e-a99b-e410cc70085a",
                name: "Banana",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "8.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fcherry.png?alt=media&token=1625fd0c-f790-4e08-ba33-748ddc4e1c6b",
                name: "Cherries",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "34.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fwatermelon.png?alt=media&token=514dec98-e2bf-4995-bfad-28967417dc5f",
                name: "Water Melon",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 3,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fredbull.png?alt=media&token=774ea322-a0ba-4c38-af17-5e4560b2a426",
                name: "Pepsi",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 1,
                stock_quantity: 100,
                price: "5.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fredbull.png?alt=media&token=774ea322-a0ba-4c38-af17-5e4560b2a426",
                name: "Red Bull",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 1,
                stock_quantity: 100,
                price: "5.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fpepsi.png?alt=media&token=934207e7-123a-4e9a-8803-3cd66ec05545",
                name: "Pepsi",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 1,
                stock_quantity: 100,
                price: "3.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fmonster.png?alt=media&token=72f7cfc9-1c25-40a6-a34d-2da1e28f521d",
                name: "Monster",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 1,
                stock_quantity: 100,
                price: "5.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fmojito.png?alt=media&token=91cf0c54-4c55-41a5-8dab-4363eef3a862",
                name: "Mojito",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 1,
                stock_quantity: 100,
                price: "14.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fsprite.png?alt=media&token=7daa58de-938c-425f-a0ea-f71d8f078c7d",
                name: "Sprite",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 1,
                stock_quantity: 100,
                price: "5.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Ffanta.png?alt=media&token=e83d37ef-e705-4991-9cd0-1a1ec5f001d7",
                name: "Fanta",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 1,
                stock_quantity: 100,
                price: "5.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fcocacola.png?alt=media&token=7867dc05-1919-44be-bd0b-0dbd131e463f",
                name: "CocaCola",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 1,
                stock_quantity: 100,
                price: "5.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Frice1.png?alt=media&token=e619b067-fc7c-4040-a6f3-09f666548a0d",
                name: "Fried Rice",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 4,
                stock_quantity: 100,
                price: "20.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Frice2.png?alt=media&token=b1fbfa7d-480a-43cb-b411-f76c4faad3a8",
                name: "Chicken Rice",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 4,
                stock_quantity: 100,
                price: "25.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Frice3.png?alt=media&token=334108c0-ba44-4df6-9da0-28e943d01341",
                name: "Mixed Rice",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 4,
                stock_quantity: 100,
                price: "21.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Frice4.png?alt=media&token=5bb93fd2-821c-4619-a938-84274f3844f8",
                name: "Beef Rice",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 4,
                stock_quantity: 100,
                price: "22.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Frice4.png?alt=media&token=5bb93fd2-821c-4619-a938-84274f3844f8",
                name: "Hot Rice",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 4,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fc1.png?alt=media&token=657aedc1-391e-4cf9-9947-1ce620b454f9",
                name: "Chinese1",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 6,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fc2.png?alt=media&token=345d3c9d-05bc-417a-8bb2-651aafa0664a",
                name: "Chinese2",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 6,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fc3.png?alt=media&token=452d9442-da36-4398-b16c-24d5cab6eb72",
                name: "Chinese3",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 6,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fc4.png?alt=media&token=c76d5c8f-aedf-4707-95a8-89a1e336c9fe",
                name: "Chinese4",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 6,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fc6.png?alt=media&token=990010fd-db39-45b0-adc0-263068968b8a",
                name: "Chinese5",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 6,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fc7.png?alt=media&token=4562d325-2961-489b-9cba-49d4a8151d62",
                name: "Chinese6",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 6,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fcu1.png?alt=media&token=0bf44638-37d8-44ea-94e4-34ab0075c0dc",
                name: "Curry1",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 5,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fcu2.png?alt=media&token=31986897-bbd0-452e-85d0-db80701e9bac",
                name: "Curry2",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 5,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fcu3.png?alt=media&token=021d6844-f16e-45b6-a55c-2ff3545dc96c",
                name: "Curry3",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 5,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fcu4.png?alt=media&token=4c88f11c-3106-4cf6-8b4b-c203be3f6c0e",
                name: "Curry4",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 5,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fcu5.png?alt=media&token=b1409fb0-ce4e-4e37-862c-15bebc75f796",
                name: "Curry5",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 5,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fcu6.png?alt=media&token=a023b4ee-8d75-4ff7-b3ad-8c2653b45400",
                name: "Curry6",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 5,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Ffi1.png?alt=media&token=13e225f2-ae70-4c80-802b-cd4c3e988404",
                name: "Bread1",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 7,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Ffi2.png?alt=media&token=65202f1d-0d2c-4e38-80bd-0f33306d90da",
                name: "Bread2",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 7,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Ffi3.png?alt=media&token=abc9a09f-7ced-48c9-bdf1-2fccbe1e14b2",
                name: "Bread3",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 7,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Ffi4.png?alt=media&token=7824e246-86a2-45fb-80dc-1bf00c9cf514",
                name: "Bread4",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 7,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Ffi5.png?alt=media&token=0f774d2e-2760-409a-b0b5-30a11b00bfae",
                name: "Bread5",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 7,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Ficecream.png?alt=media&token=40517f4b-8466-4394-9d6c-b8db2850fa14",
                name: "Desert1",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 2,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fi2.png?alt=media&token=119ebbea-1e00-43c8-bd6b-de6ad56bf358",
                name: "Desert2",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 2,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fi3.png?alt=media&token=52a9b4d9-d157-4d58-ae56-04621a77f075",
                name: "Desert3",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 2,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fi4.png?alt=media&token=338e2c00-d674-4d84-a8a6-726f47f86dd2",
                name: "Desert4",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 2,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fi5.png?alt=media&token=d2f3749b-aaab-4d4a-bd05-3846c091ca32",
                name: "Desert5",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 2,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fi6.png?alt=media&token=77dce4a2-2c5e-4ab0-a497-72f208130792",
                name: "Desert6",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 2,
                stock_quantity: 100,
                price: "16.00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                imageURL:
                    "https://firebasestorage.googleapis.com/v0/b/fullstack-food-web.appspot.com/o/products%2Fi7.png?alt=media&token=7f883b57-207d-468f-aa30-e1dfc24c76cc",
                name: "Desert7",
                description: "Nộm bò khô thơm ngon mọng nước",
                category_id: 2,
                stock_quantity: 100,
                price: "16.00",
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

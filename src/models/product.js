"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Category, { foreignKey: "category_id" });
            Product.hasMany(models.Cart_Item, { foreignKey: "product_id" });
            Product.hasMany(models.Review, { foreignKey: "product_id" });
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            price: DataTypes.INTEGER,
            stock_quantity: DataTypes.STRING,
            category_id: DataTypes.INTEGER,
            imageURL: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
            tableName: "products",
        }
    );
    return Product;
};

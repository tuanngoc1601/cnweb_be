import express from "express";
import productController from "../controllers/productController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initProductRouters = (app) => {
    router.get(
        "/all-products",
        authentication.verifyToken,
        productController.handleGetAllProducts
    );
    router.get(
        "/getAllCategories",
        authentication.verifyToken,
        productController.handleGetAllCategories
    );
    router.get(
        "/getProductByCategoryId/:categoryId",
        authentication.verifyToken,
        productController.handleGetProductByCategoryId,
    );

    return app.use("/api/v1/product", router);
};

module.exports = initProductRouters;

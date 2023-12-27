import express from "express";
import cartController from "../controllers/cartController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initCartRouters = (app) => {
    router.post(
        "/addToCart/:userId",
        authentication.verifyToken,
        cartController.handleAddToCard
    );
    router.get(
        "/getAllCart/:userId",
        authentication.verifyToken,
        cartController.handeGetAllCart
    );
    router.post(
        "/updateCart/:userId",
        authentication.verifyToken,
        cartController.handleUpdateCart
    );
    router.delete(
        "/deleteCartItem/:userId",
        authentication.verifyToken,
        cartController.handleDeleteCartItem
    );

    return app.use("/api/v1/cart", router);
};

module.exports = initCartRouters;

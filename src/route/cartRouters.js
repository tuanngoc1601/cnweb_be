import express from "express";
import cartController from "../controllers/cartController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initCartRouters = (app) => {
    router.post(
        "/addToCart/:userId",
        authentication.verifyToken,
        cartController.handleAddToCard,
    );

    return app.use("/api/v1/cart", router);
};

module.exports = initCartRouters;

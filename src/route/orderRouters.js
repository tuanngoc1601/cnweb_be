import express from "express";
import orderController from "../controllers/orderController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initOrderRouters = (app) => {
    router.post(
        "/placeOrder/:userId",
        authentication.verifyToken,
        orderController.handleOrderSubmit,
    );

    return app.use("/api/v1/orders", router);
};

module.exports = initOrderRouters;

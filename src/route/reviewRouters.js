import express from "express";
import reviewController from "../controllers/reviewController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initReviewRouters = (app) => {
    router.get(
        "/getAllReviews/:productId",
        authentication.verifyToken,
        reviewController.handleGetAllReviews
    );
    router.post(
        "/postReview",
        authentication.verifyToken,
        reviewController.handlePostReview
    );

    return app.use("/api/v1/review", router);
};

module.exports = initReviewRouters;

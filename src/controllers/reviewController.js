import reviewService from "../services/reviewService";

const reviewController = {
    handleGetAllReviews: async (req, res) => {
        const productId = req.params.productId;
        if (!productId) {
            return {
                errorCode: 1,
                message: "Missing inputs parameter!",
            };
        }
        const reviews = await reviewService.handleGetAllReviewsService(
            productId
        );
        return res.status(200).json({
            errorCode: 0,
            message: "Ok",
            reviews: reviews,
        });
    },
    handlePostReview: async (req, res) => {
        const reviewBody = req.body;
        const response = await reviewService.handlePostReviewService(
            reviewBody
        );
        return res.status(200).json(response);
    },
};

module.exports = reviewController;

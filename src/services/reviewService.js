import db from "../models/index";

const reviewService = {
    handleGetAllReviewsService: (productId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const reviews = await db.Review.findAll({
                    include: [
                        {
                            model: db.User,
                            attributes: ["username"],
                        },
                    ],
                    where: { product_id: productId },
                    raw: true,
                });

                resolve(reviews);
            } catch (e) {
                reject(e);
            }
        });
    },
    handlePostReviewService: (reviewBody) => {
        return new Promise(async (resolve, reject) => {
            try {
                await db.Review.create({
                    ...reviewBody,
                    review_date: new Date(),
                });

                resolve({
                    errorCode: 0,
                    message: "Ok",
                });
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = reviewService;

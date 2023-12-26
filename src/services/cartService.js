import db from "../models/index";

const cartService = {
    handleAddToCartService: (userId, productId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const cartItem = await db.Cart_Item.findOne({
                    where: { user_id: userId, product_id: productId },
                    raw: true,
                });
                if (cartItem) {
                    resolve({
                        errorCode: 1,
                        message: "this product already in the cart!",
                    });
                } else {
                    await db.Cart_Item.create({
                        user_id: userId,
                        product_id: productId,
                        quantity: 1,
                    });
                    resolve({
                        errorCode: 0,
                        message: "OK",
                    });
                }
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = cartService;

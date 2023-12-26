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
    handleGetAllCartService: (userId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const carts = await db.Cart_Item.findAll({
                    include: [
                        {
                            model: db.Product,
                            attributes: ["name", "price", "imageURL"],
                            include: [
                                {
                                    model: db.Category,
                                    attributes: ["name"],
                                },
                            ],
                        },
                    ],
                    where: { user_id: userId },
                    raw: true,
                });
                resolve(carts);
            } catch (e) {
                reject(e);
            }
        });
    },
    handleUpdateCartService: (userId, productId, type) => {
        return new Promise(async (resolve, reject) => {
            try {
                const item = await db.Cart_Item.findOne({
                    where: { user_id: userId, product_id: productId },
                });
                if (type === "increment") {
                    item.quantity = item.quantity + 1;
                    await item.save();
                } else {
                    if (item.quantity === 1) {
                        await item.destroy();
                    } else {
                        item.quantity = item.quantity - 1;
                        await item.save();
                    }
                }
                resolve({
                    errorCode: 0,
                    message: "Update cart successfully!",
                });
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = cartService;

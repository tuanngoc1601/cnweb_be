import db from "../models/index";

const orderService = {
    handleOrderSumitService: (userId, orderDetails) => {
        return new Promise(async (resolve, reject) => {
            try {
                const cart = orderDetails.cart;
                cart.forEach(async (item) => {
                    const itemOrder = await db.Order_Item.create({
                        product_id: item.product_id,
                        quantity: item.quantity,
                        sub_total: item.quantity * item["Product.price"],
                    });
                    await db.Order.create({
                        user_id: userId,
                        order_item_id: itemOrder.id,
                        total_amount: orderDetails.total,
                        shipping_address: orderDetails.address,
                        payment_method: "card",
                        order_date: new Date(),
                    });
                });
                await db.Cart_Item.destroy({
                    where: { user_id: userId },
                });
                resolve({
                    errorCode: 0,
                    message: "Order successfully!",
                });
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = orderService;

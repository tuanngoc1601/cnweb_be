import orderService from "../services/orderSerivce";

const orderController = {
    handleOrderSubmit: async (req, res) => {
        const userId = req.params.userId;
        const orderDetails = req.body;

        if(!userId || !orderDetails) {
            return res.status(400).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        const response = await orderService.handleOrderSumitService(userId, orderDetails);
        return res.status(200).json(response);
    },
};

module.exports = orderController;

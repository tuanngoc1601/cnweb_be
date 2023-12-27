import cartService from "../services/cartService";

const cartController = {
    handleAddToCard: async (req, res) => {
        const userId = req.params.userId;
        const productId = req.body.productId;

        if (!userId || !productId) {
            return res.status(400).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        const postResponse = await cartService.handleAddToCartService(
            userId,
            productId
        );
        if (postResponse.errorCode !== 0)
            return res.status(404).json(postResponse);
        return res.status(200).json(postResponse);
    },
    handeGetAllCart: async (req, res) => {
        const userId = req.params.userId;
        if (!userId) {
            return res.status(404).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        const response = await cartService.handleGetAllCartService(userId);
        return res.status(200).json({
            errorCode: 0,
            cart: response,
        });
    },
    handleUpdateCart: async (req, res) => {
        const userId = req.params.userId;
        const productId = req.query.productId;
        const type = req.query.type;

        if (!userId || !productId || !type) {
            return res.status(404).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        const response = await cartService.handleUpdateCartService(
            userId,
            productId,
            type
        );
        return res.status(200).json(response);
    },
    handleDeleteCartItem: async (req, res) => {
        const userId = req.params.userId;
        const productId = req.body.productId;
        
        if (!userId || !productId) {
            return res.status(404).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        const response = await cartService.handleDeleteCartItemService(userId, productId);
        return res.status(200).json(response);
    },
};

module.exports = cartController;

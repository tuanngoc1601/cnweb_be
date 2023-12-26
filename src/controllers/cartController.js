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

        const postResponse = await cartService.handleAddToCartService();
        if(postResponse.errorCode !== 0) return res.status(404).json(postResponse);
        return res.status(200).json(postResponse);
    }
};

module.exports = cartController;

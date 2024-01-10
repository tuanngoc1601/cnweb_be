import productService from "../services/productService";

const productController = {
    handleGetAllProducts: async (req, res) => {
        const allProducts = await productService.handleGetAllProductService();
        return res.status(200).json({
            errorCode: 0,
            message: "Ok",
            data: allProducts,
        });
    },
    handleGetAllCategories: async (req, res) => {
        const categories = await productService.getAllCategoriesService();
        return res.status(200).json({
            errorCode: 0,
            message: "Ok",
            data: categories,
        });
    },
    handleGetProductByCategoryId: async (req, res) => {
        const categoryId = req.params.categoryId;
        if (!categoryId) {
            return res.status(404).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }
        const products = await productService.getProductsByCategoryIdService(
            categoryId
        );
        return res.status(200).json({
            errorCode: 0,
            message: "Ok",
            data: products,
        });
    },
    handleGetProductById: async (req, res) => {
        const productId = req.params.productId;
        if (!productId) {
            return res.status(404).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        const product = await productService.handleGetProductByIdService(
            productId
        );
        return res.status(200).json({
            errorCode: 0,
            message: "Ok",
            product: product,
        });
    },
    handleCreateNewProduct: async (req, res) => {
        const newProduct = req.body;
        if (!newProduct) {
            return res.status(404).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        const response = await productService.handlePostNewProductService(newProduct);
        return res.status(200).json(response);
    },
    handleDeleteProduct: async (req, res) => {
        const productId = req.body.productId;
        if(!productId) {
            return res.status(404).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        const response = await productService.handleDeleteProductService(productId);
        return res.status(200).json(response);
    },
};

module.exports = productController;

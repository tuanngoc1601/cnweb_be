import db from "../models/index";

const productService = {
    handleGetAllProductService: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const products = await db.Product.findAll({
                    include: [
                        {
                            model: db.Category,
                            attributes: ["name", "description"],
                        },
                    ],
                    raw: true,
                });
                resolve(products);
            } catch (e) {
                reject(e);
            }
        });
    },
    getAllCategoriesService: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const categories = await db.Category.findAll({
                    raw: true,
                });
                resolve(categories);
            } catch (e) {
                reject(e);
            }
        });
    },
    getProductsByCategoryIdService: (categoryId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const products = await db.Product.findAll({
                    where: { category_id: categoryId },
                    raw: true,
                });
                resolve(products);
            } catch (e) {
                reject(e);
            }
        });
    },
    handleGetProductByIdService: (productId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const product = await db.Product.findOne({
                    include: [
                        {
                            model: db.Category,
                            attributes: ["name", "description"],
                        },
                    ],
                    where: { id: productId },
                    raw: true,
                });
                resolve(product);
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = productService;

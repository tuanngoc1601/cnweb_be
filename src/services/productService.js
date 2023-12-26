import db from "../models/index";

const productService = {
    handleGetAllProductService: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const products = await db.Product.findAll({
                    include: [{
                        model: db.Category,
                        attributes: ['name', 'description'],
                    }],
                    raw: true,
                });
                resolve(products);
            } catch (e) {
                reject(e);
            }
        });
    }
};

module.exports = productService;

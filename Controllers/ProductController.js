import Product from "../Model/product.js";
import generateProducts from "../Helper /GenerateProducts.js";
export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({status: 200, message: 'Successfully retrieved products', data: products});
    } catch (err) {
        res.status(500).json({status: 500, message: 'Internal Server Error'});
    }
}


export const testFunction = (req, res) => {
    generateProducts() ;
}

export const getProductPerCategory = async (req, res) => {
    try {
        const category = req.query.category;
        const products = await Product.find({category: category});
        if (products.length !== 0) {
            res.status(200).json({status: 200, message: `Products for category: ${category}`, data: products})
        }
        else {
            res.status(200).json({status: 404, message: "No Products found for this category", data: null})
        }
    } catch (err) {
        res.status(500).json({status: 404, message: err.message})
    }
}



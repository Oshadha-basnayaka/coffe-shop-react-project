const {productsList} = require("../constants/const");
const Product = require('../model/Product');

const ProductsController = {
    getAllProducts:async function (req, res, next) {
        try {
            const find = await Product.find();
            res.status(200).json(find);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({error: "Something went wrong"});
        }

    },

    saveProduct:async function (req, res, next) {
        try{
        const productData = req.body;
        const product = await Product.create(productData)
        res.status(200).json(product);
    } catch (err) {
            console.error(err);
            res.status(500)
                .json({error: 'Somthing Went Wrong!'
                })
        }

    },
    getProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const product = await Product.find({ id: productId });
            res.status(200).json(product);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }

    }

}

module.exports=ProductsController
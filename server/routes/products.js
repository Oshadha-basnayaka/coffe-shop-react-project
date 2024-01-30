var express = require('express');
var router = express.Router();
// const [productsList] = require('../constants/const')
const productController = require('../controller/ProductsController');
const {Router} = require("express");


/* GET all products listing. */
// http://localhost:4000/products/all
router.get('/all',productController.getAllProducts);

router.post('/save',productController.saveProduct);

router.get('/find/:id',productController.getProduct);
module.exports = router;

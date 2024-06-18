import { Router } from "express";
import { deleteProduct, saveProduct, searchProductByCategory, searchProductById, updateProduct } from "../services/product.service";

const product = Router();

product.post('/',saveProduct);
product.delete('/',updateProduct);
product.put('/',deleteProduct);
product.get('/category/:id',searchProductByCategory);
product.get('/:id',searchProductById);

export default product;
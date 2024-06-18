import { Router } from "express";
import { deleteProduct, saveProduct, searchProductByCategory, searchProductById, updateProduct } from "../services/product.service";
import { verifyToken } from "../middlewear/authorization.middleweare";


const product = Router();
product.use(verifyToken)

product.post('/',saveProduct);
product.delete('/',updateProduct);
product.put('/',deleteProduct);
product.get('/category/:id',searchProductByCategory);
product.get('/:id',searchProductById);

export default product;
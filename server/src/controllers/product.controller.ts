import { Router } from "express";
import { deleteProduct, imageBase64Convert, saveProduct, searchProductByCategory, searchProductById, updateProduct } from "../services/product.service";
import { verifyToken } from "../middlewear/authorization.middleweare";
import multer from "multer";

const product = Router();
// product.use(verifyToken)
const storage = multer.memoryStorage();
const upload = multer({storage})

product.post('/',saveProduct);
product.delete('/',updateProduct);
product.put('/',deleteProduct);
product.get('/category/:categoryName',searchProductByCategory);
product.get('/:id',searchProductById);
product.post('/image',upload.single('product_image'),imageBase64Convert)


export default product;
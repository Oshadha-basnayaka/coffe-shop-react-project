import { Request, Response, request } from "express";
import productModel from "../model/product.model";
import categoryModel from "../model/category.model";
import { isValidObjectId } from "mongoose";
import { getCategoryByCategoryName } from "./category.service";

export async function imageBase64Convert(request: Request, response: Response) {
    try {
        const file = request.file
        const base64Image = file.buffer.toString('base64');
        // console.log(request.file.buffer.length)
        // console.log(encoded);

        response.json({ base64Image: 'data:image/jpeg;base64,' + base64Image }).send();
    } catch (e) {
        console.log(e);
        response.status(500).json({ error: "internal server error" }).send()
    }

}

export async function saveProduct(req: Request, res: Response) {

    try{
        const { name, category, description, totalPrice, qty, images } = req.body;
        const dbCatefory = await categoryModel.findById(category);
        // if(!dbCatefory) throw new Error("can not save product")
        // const image = req.file.buffer;
        // const base64Encoded = image.toString('base64');
        console.log(totalPrice);
        
        
        
    
        const product = await productModel.create({
            name,
            images,
            category,
            description,
            totalPrice,
            qty
        })
        await product.save();
        res.end();
    }catch(e){
        console.log(e);
        res.status(500).send({error:"internal server error"});
    }
    
}

export function deleteProduct(req, res) {
    res.send("delete product");
}


export function updateProduct(req, res) {
    res.send("update product");
}


export async function searchProductByCategory(req: Request, res) {

    // if(!isValidObjectId(id)) throw new Error("dfdsffsedf")
    try {

        const category = await getCategoryByCategoryName(req, res);
        const prodcuts = await productModel.find({ category: category?._id });
        res.send({ data: prodcuts });
    } catch (e) {
        console.error(e);
        res.status(500).send('internal server error')

    }
}


export function searchProductById(req, res) {
    res.send("serach product by id");
}
import { Request, Response, request } from "express";
import productModel from "../model/product.model";
import categoryModel from "../model/category.model";
import { isValidObjectId } from "mongoose";

export async function saveProduct(req: Request, res:Response) {

    const { name, category, description, price, qty } = req.body;
    const dbCatefory = await categoryModel.findById(category);
    // if(!dbCatefory) throw new Error("can not save product")

    const product = await productModel.create({
        name,
        category,
        description,
        price,
        qty
    })
    product.save();
    res.end();
}

export function deleteProduct(req, res) {
    res.send("delete product");
}


export function updateProduct(req, res) {
    res.send("update product");
}


export async function searchProductByCategory(req:Request, res) {
    const {id} = req.params;
    if(!isValidObjectId(id)) throw new Error("dfdsffsedf")
    const prodcuts = await productModel.find({category:id});
    res.json(prodcuts).send();
}


export function searchProductById(req, res) {
    res.send("serach product by id");
}
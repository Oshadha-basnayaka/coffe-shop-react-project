
import mongoose, { Schema, SchemaType } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String},
    totalPrice:{type:Number},
    description:{type:String},
    qty:{type:String},
    category:{ref:"Category",type:Schema.Types.ObjectId},
    images:String
})
const productModel = mongoose.model('Product',productSchema)
export default productModel;

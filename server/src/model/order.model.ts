import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    orderDate:{type:Date, default:Date.now()},
    customerId:{ref:"Cusotmer",type:Schema.Types.ObjectId},
    address:String,
    name:String,
    totalPrice:Number,
    orderItems:[{ref:"Product",type:Schema.Types.ObjectId}],
});

const orderModel = mongoose.model('Order',orderSchema);
export default orderModel;
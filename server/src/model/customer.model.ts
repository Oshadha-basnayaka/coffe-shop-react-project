import mongoose from "mongoose";

const cusotmer = new mongoose.Schema({
    name:String,
    userName:String,
    password:String,
    contactNumber:{type:Number,unique:true},
    email:{type:String, unique:true},
    isActive:{type:Boolean, default:false},
});

const customerModel = mongoose.model('Cusotmer',cusotmer)
export default customerModel
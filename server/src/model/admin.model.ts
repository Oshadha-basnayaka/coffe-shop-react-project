import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    email:String,
    password:String
})


const adminModel = mongoose.model('admin',adminSchema);
export default adminModel;
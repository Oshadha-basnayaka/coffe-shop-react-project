
import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName:{type:String, unique:true}
});

const categoryModel = mongoose.model('Category',categorySchema);
export default categoryModel;

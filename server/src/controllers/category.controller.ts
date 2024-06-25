import { Router } from "express";
import { getAllCategory, saveCategory } from "../services/category.service";
import { get } from "mongoose";

const category = Router();

category.post('/',saveCategory)
category.get('/',getAllCategory)

export default category;
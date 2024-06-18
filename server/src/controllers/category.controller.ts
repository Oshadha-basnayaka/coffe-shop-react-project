
import { Router } from "express";
import { saveCategory } from "../services/category.service";

const category = Router();

category.post('/',saveCategory)

export default category;

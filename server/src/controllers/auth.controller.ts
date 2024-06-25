import { Router } from "express";
import { adminLogin, login } from "../services/auth.service";

const auth = Router();

auth.post('/login',login);
auth.post('/admin/login',adminLogin)


export default auth;
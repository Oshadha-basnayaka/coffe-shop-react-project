import { Router } from "express";
import { login } from "../services/auth.service";


const auth = Router();

auth.post('/login',login);


export default auth;
import { Request, Response } from "express";

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import adminModel from "../model/admin.model";
import customerModel from "../model/customer.model";

export async function login(req:Request,res:Response){
    const {email,password} = req.body;
    const user = await customerModel.findOne({email});
    if(!user) res.status(500).json({error:"can not find user with the email"}).send();
    if(!password) res.status(500).json({error:"can not find password"}).send();
    const isValidate = bcrypt.compareSync(password,user.password);
    user.password = ''
    if(isValidate) {
        const accessToken = jwt.sign({user},process.env.JWT_PRIVATEKEY)
        res.json({accessToken}).send()
    }else{
        res.json({error:"can not authorized user"}).send()
    }
    // res.status(500).json({error:"can not find user with the email"}).send();

}

export async function adminLogin(req:Request,res:Response){
    const {email,password} = req.body;
    const user = await adminModel.findOne({email});
    if(!user) res.status(500).json({error:"can not find user with the email"}).send();
    if(!password) res.status(500).json({error:"can not find password"}).send();
    const isValidate = bcrypt.compareSync(password,user.password);
    user.password = ''
    if(isValidate) {
        const accessToken = jwt.sign({user},process.env.JWT_PRIVATEKEY)
        res.json({accessToken}).send()
    }else{
        res.json({error:"can not authorized user"}).send();
    }
    // res.status(500).json({error:"can not find user with the email"}).send();

}
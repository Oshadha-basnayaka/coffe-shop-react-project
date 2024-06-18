import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const header = req.header('authorization');
    try {
        const verifyDecoded = jwt.verify(header.slice(7), process.env.JWT_PRIVATEKEY)
        req.body =verifyDecoded;
        next();
    } catch (e) {
        res.status(402).json({ error: "unauthorized request" }).send()
    }
}
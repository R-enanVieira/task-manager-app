import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface JwtPayload {
    id: number;
    email: string;
}

export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        res.sendStatus(401); // Unauthorized
        return;
    }

    console.log('token: ', token);
    console.log('process.env.ACCESS_TOKEN_SECRET: ', process.env.ACCESS_TOKEN_SECRET);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
        console.log('err: ', err);
        if (err) { 
            res.sendStatus(403); // Forbidden
            return;
        }
        
        req.user = user as JwtPayload;
        next();
    });
}
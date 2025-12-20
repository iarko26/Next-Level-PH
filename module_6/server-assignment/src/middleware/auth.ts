import config from "../config";
import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
import { DecodedToken } from "../types";
const auth=(...roles:string[])=>{
    return (req:Request,res:Response,next:NextFunction)=>{
         try{
            const header=req.headers.authorization;
            const token=header && header.split(' ')[1];
            if(!token){
                 return res.status(401).json({
                    success: false,
                    message: 'Authentication required',
                    errors:"No Token"
                });
            }
            const decoded=jwt.verify(token, config.jwtSecret as string) as DecodedToken
            req.user=decoded

            if(roles.length && !roles.includes(decoded.role)){
                return res.status(403).json({
                    success: false,
                    message: 'Access forbidden',
                    errors:"No Permission"
                })
            }
              
              next(); 
            

         }
         catch(err:any){
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired token',
                errors:err.message
            });
         }
    }

}

export default auth;
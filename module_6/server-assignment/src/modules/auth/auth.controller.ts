
import { authService } from "./auth.service";
import { Request,Response } from "express";

const signup=async(req:Request,res:Response)=>{
    try{
     const{name,email,password,phone,role}=req.body;
     if(!name || !email || !password ||!phone||!role){
                return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
     }
     if(password.length<6){
         return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters'
            });
     }
     const result=await authService.signupBs(req.body);
     res.status(201).json({
        success:true,
        message:"User registered successfully",
        data:result
     })

    }
    catch(error:any){
        res.status(500).json({
        success: false,
         message: error.message || 'Registration failed',
         
        })
    }
}

const signin=async(req:Request,res:Response)=>{
    const {email,password}=req.body;
    if(!email || !password){
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }
    const result=await authService.singInBs(req.body);
    res.status(201).json({
        success:true,
        message:"User login successfully",
        data:result
     })
}




export const authController={
    signup,
    signin
}
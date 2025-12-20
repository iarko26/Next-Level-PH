import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { pool } from "../../config/db";
import config from "../../config";

const signupBs=async(payload:Record<string,unknown>)=>{
    const{name,email,password,phone,role}=payload;
    if(!password || (password as string).length<6){
      throw new Error('Password must be at least 6 characters');
    }
    const hashedPassword=await bcrypt.hash(password as string , 10);
    const result=await pool.query(
        `INSERT INTO users(name,email,password,phone,role) VALUES($1, $2, $3, $4, $5) RETURNING *
        `,[name,(email as string).toLowerCase(),hashedPassword,phone,role]
    )
    return result.rows[0];



}


const singInBs=async(payload:Record<string,unknown>)=>{
   const {email,password}=payload;
   const result=await pool.query(`
    SELECT * FROM users WHERE email=$1`,[(email as string).toLowerCase()]
    )

    if(result.rows.length===0){
        throw new Error("Invalid Credintials")
    }
    
    const matchedpassword=await bcrypt.compare(password as string, result.rows[0].password);
    if(!matchedpassword){
        throw new Error("Invalid Credintials")
    }

    const jwtpayload={
        id:result.rows[0].id,
        email:result.rows[0].email,
        role:result.rows[0].role,
    }

    const token=jwt.sign(jwtpayload,config.jwtSecret as string, { expiresIn: '7d' })
    return{
        token,
        user:{
        id:result.rows[0].id,
        name:result.rows[0].name,
        email:result.rows[0].email,
        phone:result.rows[0].phone,
        role:result.rows[0].role,
        }
    }
}



export const authService={
    signupBs,
    singInBs
}
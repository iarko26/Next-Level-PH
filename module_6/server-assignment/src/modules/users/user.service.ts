import { pool } from "../../config/db";
import bcrypt from "bcryptjs"
const getAllUserBS=async()=>{
    const result=await pool.query(`
        SELECT id,name,email,phone,role FROM users ORDER BY id
        
        `)
        return result.rows
}

const updateUserBS=async(

    id:number,
    payload:Record<string,unknown>,
    loggedInUserId:number,
    loggedInUserRole:"admin" | "customer"


)=>{
    const userCheckResult=await pool.query(`
        SELECT * FROM users WHERE id=$1
        `,[id])


    if(userCheckResult.rows.length===0){
        throw new Error("User not found")
    }
    if(loggedInUserRole==="customer" && loggedInUserId!==id){
        throw new Error("Customer cant update others profile")
    }
    const targetfields=[];
    const targetvalues=[];
    let paramCount=1

    if(payload.name!==undefined){
        targetfields.push(`name=$${paramCount++}`);
        targetvalues.push(payload.name);
    }
    
    if(payload.email!==undefined){
        targetfields.push(`email=$${paramCount++}`);
        targetvalues.push((payload.email as string).toLowerCase());
    }
    if(payload.phone!==undefined){
        targetfields.push(`phone=$${paramCount++}`);
        targetvalues.push(payload.phone);
    }
    if(payload.role!==undefined && loggedInUserRole==="admin"){
        targetfields.push(`role=$${paramCount++}`);
        targetvalues.push(payload.role);
    }
    if(payload.password!==undefined){
      const hashedPassword=await bcrypt.hash(payload.password as string,10);
      targetfields.push(`password=$${paramCount++}`);
      targetvalues.push(hashedPassword);
    }
    
    if(targetfields.length===0){
      throw new Error("No valid Fields")
    }
    targetvalues.push(id);
    const result=await pool.query(`
        UPDATE users SET ${targetfields.join(', ')} WHERE id=$${paramCount} RETURNING id,name,email,phone,role
        `,targetvalues);
    
    return result.rows[0];

}


const deleteUserBs=async(id:number)=>{
    const userCheckResult=await pool.query(`
        SELECT * FROM users WHERE id=$1
        `,[id])


    if(userCheckResult.rows.length===0){
        throw new Error("User not found")
    }

     const bookingcheckResult=await pool.query(`
        SELECT id from bookings WHERE vehicle_id=$1 AND status=$2

        `,[id,'active']);
if(bookingcheckResult.rows.length>0){
    throw new Error("Active vehicles cannot be deleted")
    
}
await pool.query(`DELETE FROM users WHERE id=$1`,[id])



}

export const userService={
    getAllUserBS,
    updateUserBS,
    deleteUserBs
}

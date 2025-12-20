import bcrypt from "bcryptjs"
import { pool } from "../../config/db"

const createvehicleBs=async(payload:Record<string,unknown>)=>{
    const {
        vehicle_name,type,registration_number,daily_rent_price,availability_status
    }=payload;
    const result=await pool.query(
        `INSERT INTO vehicles(vehicle_name,type,registration_number,daily_rent_price,availability_status) VALUES($1, $2, $3, $4, $5) RETURNING *`,
        [vehicle_name,type,registration_number,daily_rent_price,availability_status]
    )
    return result.rows[0]

}


const getallvehiclesBs=async()=>{
    const result=await pool.query(
        `SELECT * FROM vehicles ORDER BY id DESC`,
    )
    return result.rows;
}
const getallvehiclesIdBs=async(id:number)=>{
    const result=await pool.query(
        `SELECT * FROM vehicles where id=$1 `,
        [id]
    )
    return result.rows[0];
}

const updateVehicleBs=async(
    id:number,
    payload:Record<string,unknown>,

)=>{
const vehiclecheckResult=await pool.query(`
    SELECT * from vehicles WHERE id=$1
    `,[id])

if(vehiclecheckResult.rows.length===0){
    throw new Error("Vehicle not found")
}
    const targetfields=[];
    const targetvalues=[];
    let paramCount=1
    if(payload.vehicle_name!==undefined){
            targetfields.push(`vehicle_name=$${paramCount++}`);
            targetvalues.push(payload.vehicle_name);
        }
        
        if(payload.type!==undefined){
            targetfields.push(`type=$${paramCount++}`);
            targetvalues.push(payload.type);
        }
        if(payload.registration_number!==undefined){
            targetfields.push(`registration_number=$${paramCount++}`);
            targetvalues.push(payload.registration_number);
        }
        
        if(payload.daily_rent_price!==undefined){
         
          targetfields.push(`daily_rent_price=$${paramCount++}`);
          targetvalues.push(payload.daily_rent_price);
        }
         if(payload.availability_status!==undefined){
         
          targetfields.push(`availability_status=$${paramCount++}`);
          targetvalues.push(payload.availability_status);
        }
        
        if(targetfields.length===0){
          throw new Error("No valid Fields")
        }
        targetvalues.push(id);
        const result=await pool.query(`
            UPDATE vehicles SET ${targetfields.join(', ')} WHERE id=$${paramCount} RETURNING *
            `,targetvalues);
        
        return result.rows[0];
}

const deleteVehicleBs=async(id:number)=>{
    const vehiclecheckResult=await pool.query(`
    SELECT * from vehicles WHERE id=$1
    `,[id])
    if(vehiclecheckResult.rows.length===0){
    throw new Error("Vehicle not found")
   
}
 const bookingcheckResult=await pool.query(`
        SELECT id from bookings WHERE vehicle_id=$1 AND status=$2

        `,[id,'active']);
if(bookingcheckResult.rows.length>0){
    throw new Error("Active vehicles cannot be deleted")
    
}
await pool.query(`
DELETE FROM vehicles WHERE id=$1    `,[id])

}

export const vehicleService={
    createvehicleBs,
    getallvehiclesBs,
    getallvehiclesIdBs,
    updateVehicleBs,
    deleteVehicleBs

}

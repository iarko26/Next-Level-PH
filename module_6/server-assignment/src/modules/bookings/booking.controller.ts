import { bookingService } from "./booking.service";
import { Request,Response } from "express";
const createBooking=async(req:Request,res:Response)=>{
try{
const {customer_id,vehicle_id,rent_start_date,rent_end_date}=req.body;
 if (!customer_id || !vehicle_id || !rent_start_date || !rent_end_date) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: 'All fields are required'
      });
    }
const booking=await bookingService.createbookingBs(req.body);
    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking
    });
}
catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create booking",
      errors: error.message || "Failed to create booking",
    });
  }
}


const getbooking=async(req:Request,res:Response)=>{
    try{ 
 const booking=await bookingService.getbookingBs(
    req.user?.id as number,
    req.user?.role as string
 )

 res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking
    });

    }
    catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to retrieve bookings",
      errors: error.message || "Failed to retrieve bookings",
    });
  }
}

export const bookingController={
    createBooking,
    getbooking
}

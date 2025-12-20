import { vehicleService } from "./vehicle.service";
import { Request, Response } from "express";
const createVehicle=async(req:Request,res:Response)=>{
try{
const{ vehicle_name,type,registration_number,daily_rent_price,availability_status}=req.body;
if(!vehicle_name|| !type|| !registration_number || !daily_rent_price || !availability_status){
    return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: 'All fields are required'
      });
}

const vehicles=await vehicleService.createvehicleBs(
    req.body)

    res.status(201).json({
      success: true,
      message: "Vehicle created successfully",
      data: vehicles,
    });




}
catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create vehicles",
      errors: error.message || "Failed to create vehicles",
    });
  }
}
const getVehicle=async(req:Request,res:Response)=>{
   try{

const vehicles=await vehicleService.getallvehiclesBs();
  if(vehicles.length===0){
    return res.status(200).json({
        success: true,
        message: 'No vehicles found',
        data: []
      });
  }
    res.status(200).json({
      success: true,
      message: "Vehicles retrieved successfully ",
      data: vehicles,
    });




}
catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to retrive vehicles",
      errors: error.message || "Failed to retrive vehicles",
    });
  } 
}
const getVehicleId=async(req:Request,res:Response)=>{
    try{
        const id=parseInt(req.params.vehicleId!);
    const vehicle=await vehicleService.getallvehiclesIdBs(id);
    if(!vehicle){
         return res.status(404).json({
        success: false,
        message: "Vehicle not found",
        errors: "Vehicle not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Vehicle retrieved successfully ",
      data: vehicle,
    });

    }

    catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to retrive vehicle",
      errors: error.message || "Failed to retrive vehicle",
    });
  } 

}
const updateVehicle=async(req:Request,res:Response)=>{
    try{
        const id=parseInt(req.params.vehicleId!);
        const updates=req.body;

        const updatedVehicle=await vehicleService.updateVehicleBs(id,updates);
        res.status(200).json({
      success: true,
      message: "Vehicle updated successfully",
      data: updatedVehicle,
    });

    }
     catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update vehicle",
      errors: error.message || "Failed to update vehicle",
    });
  } 
}


const deleteVehicle=async(req:Request,res:Response)=>{
    try{
        const id=parseInt(req.params.vehicleId!);
     

        await vehicleService.deleteVehicleBs(id);
        res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully",
      
    });

    }
     catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete vehicle",
      errors: error.message || "Failed to delete vehicle",
    });
  } 
}




export const vehicleController={
    createVehicle,
    getVehicle,
    getVehicleId,
    updateVehicle,
    deleteVehicle
}
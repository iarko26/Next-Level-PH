import { userService } from "./user.service";
import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUserBS();
    res.status(200).json({
      success: true,
      message: "All Users Retrieved Successfully",
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to retrieve users",
      errors: error.message || "Failed to retrieve users",
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.userId!);
    const updates = req.body;
    const users = await userService.updateUserBS(
      id,
      updates,
      req.user?.id as number,
      req.user?.role as "admin" | "customer"
    );
    res.status(200).json({
      success: true,
      message: "Users Update Succesfully",
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update",
      errors: error.message || "Failed to update",
    });
  }
};

const deleteuser=async(req:Request,res:Response)=>{
  try{
   const id = parseInt(req.params.userId!);
   await userService.deleteUserBs(id);
   res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully",
      
    });
  }catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update",
      errors: error.message || "Failed to update",
    });
  }

}


export const userController={
    getUser,updateUser,deleteuser
}

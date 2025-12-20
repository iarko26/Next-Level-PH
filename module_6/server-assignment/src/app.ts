import express, { Request, Response } from "express"
import INITDBCON from "./config/db"
import { authRoutes } from "./modules/auth/auth.routes";
import { userRoutes } from "./modules/users/user.routes";
import { vehicleRoutes } from "./modules/vehicles/vehicle.routes";
import { bookingRoutes } from "./modules/bookings/booking.routes";

const app=express();
INITDBCON();
app.use(express.json());

app.get('/',(req:Request,res:Response) => {
  res.send('Hello World Typescript!')
})
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/vehicles',vehicleRoutes)
app.use('/api/v1/bookings',bookingRoutes)
app.use((req:Request,res:Response)=>{
  res.status(404).json({
    success:false,
    message:"NOT FOUND",
    path:req.path
  })
})

export default app;
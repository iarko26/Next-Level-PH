import { parse } from "path"
import addRoutes from "../helpers/RouteHandler"
import sendJson from "../helpers/sendJson"
import parseBody from "../helpers/parseBody"
addRoutes("GET","/",(req,res)=>{
sendJson(res,200,{
  message:"Code For Node/js With TS",
  path:req.url
})
})
addRoutes("GET","/api",(req,res)=>{
    sendJson(res,200,{
   message: "Health status ok",
  path:req.url
})
})

addRoutes("POST","/api/users",async(req,res)=>{
  const body=await parseBody(req);
  sendJson(res,200,{
    body
  })

})
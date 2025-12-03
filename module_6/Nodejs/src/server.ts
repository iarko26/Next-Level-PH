
import http, {IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

import path from "path";

import { routes,RouteHandler } from "./helpers/RouteHandler";
import "./routes"


const server:Server=http.createServer((req:IncomingMessage,res:ServerResponse)=>{
  const method=req.method?.toUpperCase() || "";
  const path=req.url || "";
  const methodMap=routes.get(method);
  const handler: RouteHandler | undefined=methodMap?.get(path)

  if(handler){
   handler(req,res)
  }

  else{
    res.writeHead(400, {"content-type":"application/json"})
    res.end(JSON.stringify({
      success:false,
      message:"Routes not found",
     path
    }))
  }


})


server.listen(config.port,()=>{
   console.log(`Server Running on ${config.port}`)
})
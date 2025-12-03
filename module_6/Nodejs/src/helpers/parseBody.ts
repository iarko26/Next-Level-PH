import { error } from "console";
import { IncomingMessage } from "http";

async function parseBody(req:IncomingMessage):Promise<any>{
return new Promise((resolve,reject)=>{
      let body='';
      req.on("data",chunk=>{
        body+=chunk.toString();
      })

      req.on("end",()=>{
     try{
      resolve(body?JSON.parse(body):{})
     }
     catch(e:any){
     reject(e)
     }
      })

      req.on("error", (err) => {
      reject(err);
    });

})
}

export default parseBody
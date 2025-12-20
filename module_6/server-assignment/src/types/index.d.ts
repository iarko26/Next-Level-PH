import { JwtPayload } from "jsonwebtoken";
export interface DecodedToken extends JwtPayload{
    id:number,
    email:string,
    role:"admin" | "customer"
}

declare global{
    namespace Express{
        interface Request{
           user?: DecodedToken;
        }
    }
}


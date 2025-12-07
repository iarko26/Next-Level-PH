
import express,{NextFunction, Request,Response} from "express"
import {Pool} from "pg"
import dotenv from "dotenv"
import path from "path"

dotenv.config({path:path.join(process.cwd() , ".env")})
const app = express()
const port = 5000
app.use(express.json());
const pool=new Pool({
    connectionString:`${process.env.conDB}`
})

const INITDBCON=async()=>{
 try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE,
      age INT,
      phone VARCHAR(20) NULL,
      address TEXT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
      )`
    );
    console.log('Users table created successfully');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(200) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT false,
      due_date DATE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('Todos table created successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}
INITDBCON();

const logger=(req:Request,res:Response,next:NextFunction)=>{
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
  next();
}


app.get('/', (req:Request,res:Response) => {
  res.send('Hello World Typescript!')
})

app.post('/users',async(req:Request,res:Response)=>{
  const {name,email}=req.body;
    try{
const result=await pool.query(
  `INSERT INTO users(name,email) VALUES($1, $2) RETURNING *
  `, [name,email]
)

res.status(201).json({
  sucess:true,
  message:"User Create Successfully",
  data:result.rows[0]
})
    }
    catch(err:any){
      res.status(500).json({
        success:false,
        message:err.message
      })

    }
  
})

app.get('/users',async(req:Request,res:Response)=>{
  try{
const result=await pool.query(`SELECT * FROM users `);
res.status(200).json({
success:true,
message:"Get All Users",
data:result.rows
})
  }
  catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
})


app.put('/users/:id', async (req: Request, res: Response) => {
  const {name,email}=req.body;
  try {
    const result = await pool.query(`UPDATE users SET name=$1, email=$2, updated_at=NOW() WHERE id=$3 RETURNING *`, [name,email,req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User Update Successfully",
      data: result.rows[0]
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});


app.delete('/users/:id', async (req: Request, res: Response) => {
  
  try {
    const result = await pool.query(`DELETE FROM users WHERE id=$1 RETURNING *`, [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
      data: result.rows[0]
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});



app.post('/todos',async(req:Request,res:Response)=>{
  const {user_id,title}=req.body;
    try{
const result=await pool.query(
  `INSERT INTO todos(user_id,title) VALUES($1, $2) RETURNING *
  `, [user_id,title]
)

res.status(201).json({
  sucess:true,
  message:"Todo Create Successfully",
  data:result.rows[0]
})
    }
    catch(err:any){
      res.status(500).json({
        success:false,
        message:err.message
      })

    }
  
})

app.get('/todos',async(req:Request,res:Response)=>{
  try{
const result=await pool.query(`SELECT * FROM todos `);
    res.status(200).json({
      success: true,
      message: "All todos retrieved successfully",
      data: result.rows
    });
  }
  catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
})



app.use((req:Request,res:Response)=>{
  res.status(404).json({
    success:false,
    message:"NOT FOUND",
    path:req.path
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import express from 'express';
import mongoose, { connect, model, Schema } from 'mongoose';
import authRouter from './Routes/auth/authRoutes.js';
import cors from "cors";
import { connectDB } from './Config/dbConfig.js';
import studentRoutes from './Routes/student/studentRoutes.js';
import bookRouter from './Routes/book/bookRoutes.js';

const PORT=9000;
const app=express();

// app.get("/diya",(req, res)=>{
//      res.send("hello world");
// })

app.use(cors());
app.use(express.json());

connectDB();
//schema Design
// app.post("/`sign-in",async(req,res)=>{
//     //1 scheema done
//     //query with our database
//     const data={
//         "name":"diya",
//         "email":"diya@gmail.com",
//         "age":20
//     }
//     const dbUser=await new User.create(data);
//     console.log(dbUser);
// })

app.use('/auth', authRouter);
app.use('/book',bookRouter)
app.use('/student',studentRoutes);

app.listen(PORT,()=>{
    console.log("Server is running at http://localhost:9000");
})
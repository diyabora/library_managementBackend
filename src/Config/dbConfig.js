import mongoose from "mongoose";

export const connectDB=async()=>{
    //error handling
    try{
       await mongoose.connect("mongodb+srv://divyanshibora005_db_user:diyaLibrary@cluster0.laliqdu.mongodb.net/?appName=Cluster0");
       console.log("database is connetected");
    }
    
    catch(error){
        console.log("error while connecting to database",error);
    }
}


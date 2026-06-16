import { model, Schema } from "mongoose";

const studentSchema = Schema({
    name: String,
    email: String,
    dateOfJoining: String,
    address: String,
    phone: String,
    seatNumber:String,
    status:String,
    course:String,
    fee:String,
    address:String
},

    {
        timestamps: true
    }
);
export const Student = model("student", studentSchema);
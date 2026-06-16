import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    contact: String,
    password: String
});
export const User = model("users", userSchema);
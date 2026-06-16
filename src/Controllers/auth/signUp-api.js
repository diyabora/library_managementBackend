import bcrypt from "bcrypt";
import { User } from "../../Models/auth/user-model.js";
const signUpApi = async (req, res) => {
    try {
        const userData = req.body;
        console.log(req.body);
        if (userData.name === "" || userData.email === "" ||userData.contact===""|| userData.password === "") {
            return res.status(422).json({ message: "all inputs are required" });
        }
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return res.status(409).json({ message: "email is already in used" });
        }
        const hashPassword = await bcrypt.hash(userData.password, 6);
        const newUser = new User({
            name: userData.name,
            email: userData.email,
            contact:userData.contact,
            password: hashPassword
        });
        await newUser.save();
        return res.status(201).json({ 
            message: "new user has been registered", user:newUser});
    }
    catch (error){
        return res.status(500).json({
            message:"internal server error"
        });
    }
}

export default signUpApi;
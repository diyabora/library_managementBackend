import bcrypt from "bcrypt";
import { User } from "../../Models/auth/user-model.js";
import jwt from "jsonwebtoken";

const signInApi = async (req, res) => {
    try {
        const userData = req.body;
        console.log(req.body);
        //frontend data validation part for missing input feilds
        if (userData.username === "" || userData.email === "" || userData.password === "") {
            return res.status(422).json({
                message: "all feilds are required",
                status: 422
            })
        };
        const existingUser = await User.findOne({ email: userData.email });
        
        //if user is not exist in database
        if (!existingUser) {
            return res.status(404).json({
                message: "user is not found, please sign up first", status: 404
            });
        }

        //if user exist in the database 
        const passwordValidate = await bcrypt.compare(userData.password, existingUser.password);
        if (!passwordValidate) {
            return res.status(401).json({
                message: "invalid credentials",
                status: 401
            });
        }

        const token = jwt.sign({
            userId: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
        }, "diya123",
            {
                expiresIn: "1d"
            }
        );
        return res.status(200).json({
            message: "login successfully",
            status: 200,
            token,
            user: {
                userId: existingUser._id,
                name: existingUser.name,
                email: existingUser.email
            }
        })

    }
    catch (error) {
        console.log("internal server error");
        console.log(error);
        
        return res.status(500).json({
            message: "internal server error"
        });
    }
};

export default signInApi;
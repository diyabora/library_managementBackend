import { Router } from "express";
import signUpApi from "../../Controllers/auth/signUp-api.js";
import signInApi from "../../Controllers/auth/signIn-api.js";

const authRouter=Router();
authRouter.post("/sign-up",signUpApi);
authRouter.post("/sign-in",signInApi);
export default authRouter;
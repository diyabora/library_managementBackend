import { Router } from "express";
import addNewStudent from "../../Controllers/student/add-student-api.js";
import getAllStudentApi from "../../Controllers/student/get-all-student-api.js";
import deleteStudent from "../../Controllers/student/delete-student-api.js";
import getStudentById from "../../Controllers/student/getStudent-By-Id-api.js";
import updateStudent from "../../Controllers/student/updete-student-api.js";

const studentRouter = Router();
studentRouter.post("/add-new-student", addNewStudent);
studentRouter.get("/get-all-students", getAllStudentApi);
studentRouter.get("/getStudent/:id", getStudentById);
studentRouter.delete("/delete-student/:id", deleteStudent);
studentRouter.patch("/updateStudent/:id",updateStudent);
export default studentRouter;
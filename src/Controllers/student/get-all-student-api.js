import { Student } from "../../Models/student/student-schema.js";

const getAllStudentApi = async (req, res) => {
    try {
        let allStudents = await Student.find() || [];
        if (allStudents.length === 0) {
            return res.status(404).json({
                message: "no student found",
                status: 404
            })
        }
        return res.status(200).json({
            message: "Students found successfully",
            status: 200,
            students: allStudents
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error",
            status: 500
        })
    }
}
export default getAllStudentApi;
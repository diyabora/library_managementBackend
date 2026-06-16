import { Student } from "../../Models/student/student-schema.js";

async function getStudentById(req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const studentDetails = await Student.findById(id);
     
        if (!studentDetails) {
            return res.status(404).json({
                message: "student not found",
                status: 404
            })
        }
        return res.status(200).json({
            message: "student found successfully",
            status: 200,
            student: studentDetails
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR in backend",
            status: 500
        })
    }
}

export default getStudentById;
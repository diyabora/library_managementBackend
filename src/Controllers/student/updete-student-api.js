import { Student } from "../../Models/student/student-schema.js";

async function updateStudent(req, res) {
    try {
        let studentData = req.body;
        const { id } = req.params;
        console.log("updated students data:", studentData);
        if (!id) {
            return res.status(400).json({
                message: "student id is required in url",
                status: 400
            })
        }
        const UpdatedData = await Student.findByIdAndUpdate(id, studentData, { new: true });
        if (!studentData) {
            return res.status(404).json({
                message: "student data is not updated yet",
                status: 404
            })
        }

        return res.status(200).json({
            message: "student data updated succesfully",
            status: 200,
            student:UpdatedData
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
            status: 500
        })
    }
}

export default updateStudent;
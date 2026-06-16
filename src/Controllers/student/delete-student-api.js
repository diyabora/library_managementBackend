import { Student } from "../../Models/student/student-schema.js";

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const studentData = await Student.findByIdAndDelete(id);
        console.log("deleted student data:", studentData);
        if(!studentData){
            return res.status(404).json({
                message:"no student found",
                status:404
            })
        }
        return res.status(200).json({
            message:"student has been detected successfully",
            status:200,
            deletedStudent:studentData
        })
    }
    catch (error) {
        return res.status(500).json({
            message:"internal server error",
            status:500
        })
    }
}

export default deleteStudent;
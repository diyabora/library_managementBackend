import { Student } from "../../Models/student/student-schema.js";

const addNewStudent = async(req, res) => {
    try {
        const studentData = req.body;
        console.log("backend student data:",studentData);
        //validation if req has empty data in any input value 
        if (studentData.name=="" || studentData.phone=="" || studentData.email=="" ||studentData.doj=="" || studentData.seatNumber=="" || studentData.status=="" || studentData.course=="" || studentData.fee=="" || studentData.address=="") {
            return res.status(422).json({
                message:"All Fields are required",
            })
        }
        //validation to prevent dublicate entry in db   
        const existingStudent=await Student.findOne({email:studentData.email});
        if(existingStudent){
            return res.status(409).json({
                message:`email is already in used. email :${studentData.email}`
            }); 
        }
        //access your student schema
        const newStudent=new Student(studentData);
        await newStudent.save();
        return res.status(201).json({
            message:"new student has been added",
            status:201,
            student:newStudent,
        })
    }
    catch(error){
      return res.status(500).json({
        message:"internal sever error",
        status:500
      })
    }
};

export default addNewStudent;
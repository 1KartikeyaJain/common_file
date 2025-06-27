import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017/Server_side_project')



const register = new mongoose.Schema({
    fullname:{type:String},
    region:{type:String},
    resume:{ data: Buffer,
    contentType: String,
    filename: String},
    mob_number:{type:String},
    degree:{type:String}

})




export const Student = mongoose.model("Register",register)


const student_login = new mongoose.Schema({
    Username:{type:String},
    Password:{type:String},
})
export const stu_login = mongoose.model("student_login",student_login)
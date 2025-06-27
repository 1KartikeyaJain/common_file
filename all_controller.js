

import { Student , stu_login} from "../mongodb/module.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure 'uploads' directory exists
const uploadPath = path.resolve("uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Multer for file uploads
const storagee = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
export const uploadd = multer({ storage: storagee });

// Controller function to handle student form and embed resume
export const saveStudent = async (req, res) => {
  try {
    const { fullname, region, mob_number, degree } = req.body;

    let resumeData = null;
    if (req.file) {
      const filePath = req.file.path;
      const fileBuffer = fs.readFileSync(filePath);

      resumeData = {
        data: fileBuffer,
        contentType: req.file.mimetype,
        filename: req.file.filename,
      };
    }

    const newStudent = new Student({
      fullname,
      region,
      resume: resumeData,
      mob_number,
      degree,
    });

    await newStudent.save();
    res.status(201).json({ message: "Student saved successfully" });
  } catch (err) {
    console.error("Error saving student:", err.message, err.stack);
    res.status(500).json({ error: "Something went wrong while saving the student" });
  }
};

export const Student_login = async (req, res) => {
  try{
  const {Username,Password}=req.body
  const new_student_login = new stu_login({
    Username,
    Password
  })
   await new_student_login.save();
    res.status(201).json({ message: "created credential successfully" });
}catch (err) {
    console.error("Error in credential student:", err.message, err.stack);
    res.status(500).json({ error: "Something went wrong while saving the credential" });
  }
}
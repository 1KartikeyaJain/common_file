import express from "express";
import { saveStudent,uploadd, Student_login} from "../Controller/all_controller.js";
const router = express.Router();

// POST /api/student - handle form submission with file upload
router.post("/student", uploadd.single("resume"), saveStudent);
router.post("/student_login",Student_login)




export default router;

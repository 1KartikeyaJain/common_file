// import express from "express"
// import { routers } from "./routers/Allroutes.js"
// // import { useR } from "./modules/Allmodules.js"
// import mongoose from "mongoose"
// const app = express()
// const port = 4000
// app.set("view engine","ejs")
// app.use(express.json())
// app.use(routers)

// try{
//    await mongoose.connect('mongodb://localhost:27017/Admin_Details')
// }catch(error){
//     console.log(error);
//     process.exit()
// }

// app.listen(port,()=>{
//     console.log(`running on the port:${port}`);
// })

import express from "express";
import { routers } from "./routers/Allroutes.js";
import mongoose from "mongoose";

const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.use(express.json()); // Use JSON middleware first
app.use(express.urlencoded({extended:true}))
app.use(routers);
app.use('/uploads', express.static('uploads'));


async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Admin_Details");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

connectDB(); // Call the async function

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

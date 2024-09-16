import express from "express";
import HomeRoute from "./routes/HomeRoute.js"
import LoginRoute from "./routes/LoginRoute.js"
import EmployeeRoute from "./routes/EmployeeRoute.js"
import connectDB from "./dbConfig/Db.js";
const app=express();

app.use(express.json());

connectDB();

app.use('/',HomeRoute);
app.use('/',LoginRoute);
app.use('/',EmployeeRoute);



app.listen(3000,()=>{
    console.log("server listening on port ",3000)
})

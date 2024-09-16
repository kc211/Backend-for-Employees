import mongoose from "mongoose";

mongoose.set("strictQuery",false)

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://boyinayoshitha20:Sruthi123@cluster0.i0rgl.mongodb.net/MERN-Assessment')
        console.log("Database Connected Successfully")
    }
    catch(err)
    {
        console.error("DB connection error",err)
    }
}

export default connectDB
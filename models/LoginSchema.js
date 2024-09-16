import mongoose from "mongoose";

const LoginSchema= new mongoose.Schema({
 f_userName:{
    type:String,
    required:true,
    unique:true
 },
 f_password:{
    type:String,
    required:true,
    minlength:6
 }
})

const Login = mongoose.model('Login', LoginSchema,'Login');

export default Login
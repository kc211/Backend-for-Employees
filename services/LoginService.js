import Login from "../models/LoginSchema.js"

export const findUser = async (LoginDetails)=>{
   try{
    const {f_userName,f_password }=LoginDetails

    const LoginUser= await Login.findOne({f_userName});
    if(!f_userName)
    {
        return false;
    }
    if(f_password!==LoginUser.f_password)
    {
        return false;
    }
    return true;
   }
   catch(err)
   {
    console.error('Error during login service:', err);
    throw new Error('Server error during login');
   }
}
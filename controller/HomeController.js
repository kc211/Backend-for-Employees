export const Home =async(req,res)=>{
    return res.status(200).json({message:"Welcome to dashboard"});
}
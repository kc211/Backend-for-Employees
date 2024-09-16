import User from "../models/EmployeeSchema.js";


export const find=async()=>{
    const employees=await User.find();
    if(!employees)
    {
        return false
    }
    return employees
}

export const findById=async(id)=>{
    try{
        const employeeId=id;
        const employeeDetails=await User.findById(employeeId);
        if(!employeeDetails)
        {
            return false;
        }
        return employeeDetails;
    }
    catch(err)
    {
        console.log("Internal server error during deletion of employee details", err)
        return false;
    }
}



export const create = async (payload)=>{
   try{
    const employeeDetails={...payload};
    const createdUser = await User.create(employeeDetails);
    if(!createdUser)
    {
        return false
    }
    return createdUser.toObject();
   }
   catch(err)
   {
    console.error("Internal server error during creation of Employee", err);
    return false
   }
}

export const update=async(id,payload)=>{
    try{
        const updatedPayload={...payload};
        const filter=id;
        const updatedUser = await User.findByIdAndUpdate(filter,updatedPayload,{new:true});
        if(!updatedUser)
        {
            return false
        }
        return updatedUser.toObject();
       }
       catch(err)
       {
        console.error("Internal server error during updation of Employee details", err);
        return false
       }
}

export const deleteEmployeeById = async(id)=>
{
    try{
        const employeeId=id;
        const deletedUser=await User.findByIdAndDelete(employeeId);
        if(!deletedUser)
        {
            return false;
        }
        return deletedUser; 
    }
    catch(err)
    {
        console.log("Internal server error during deletion of employee details", err)
        return false;
    }
}
import { PostEmployeeValidation } from "../middlewares/EmployeeValidation.js";
import {create,update,find,findById,deleteEmployeeById} from "../services/EmployeeServices.js"

export const findAllEmployees=async(req,res)=>{
    try {
        const employees = await find();
        if (employees.length === 0) {
            return res.status(404).json({ message: 'No employees found' });
        }
        return res.status(200).json(employees);
    } catch (err) {
        console.error('Error retrieving employees:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}


export const createEmployee = async (req, res) => {
    const validate = PostEmployeeValidation(req.body);
    if (!validate) {
        res.status(400).send("Payload Invalid");
    }
    const payload = req.body;
    console.log("payload ",payload);
    const created = await create(payload);
    if (!created) {
        console.error("Failed to create employee");
        return res.status(500).json({ message: "Failed to create employee" });
    }
    return res.status(201).json({message:"Employee created successfully",created});
}


export const updateEmployee = async (req, res) => {
    const empId=req.params.id;
    const payload=req.body;
    const id= await findById(empId)
    if(!id)
    {
        console.error("Id not found");
        return res.status(404).json({message:`Employee with id ${empId} not found`});
    }
    const updated = await update(empId,payload);
    console.log(updated)
    if (!updated) {
        console.error("Failed to update employee");
        return res.status(500).json({ message: "Failed to update employee" });
    }
    return res.status(201).json({message:"Employee updated successfully",updated});
}

export const deleteEmployee = async (req, res) => {
    const id=req.params.id;
    const employee= await findById(id)
    if(!employee)
    {
        console.error("Id not found");
        return res.status(404).json({message:`Employee with id ${empId} not found`});
    }
    const deleted = await deleteEmployeeById(employee.id);
    console.log(deleted)
    if (!deleted) {
        console.error("Failed to delete employee");
        return res.status(500).json({ message: "Failed to delete employee" });
    }
    return res.status(204);
}
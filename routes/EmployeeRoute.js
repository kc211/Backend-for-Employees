import { Router } from "express";
import {createEmployee,updateEmployee,deleteEmployee,findAllEmployees } from "../controller/EmployeeController.js"

const router=Router();

router.get('/employees',findAllEmployees)
router.post('/CreateEmployee',createEmployee);
router.post('/editEmployee/:id',updateEmployee);
router.get('/deleteEmployee/:id',deleteEmployee);

export default router
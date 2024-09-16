import { Router } from "express";
import {Login} from "../controller/LoginController.js"
const router=Router();

router.post('/login',Login);
export default router
import { Router } from "express";
import {Home} from "../controller/HomeController.js"
const router=Router();

router.get('/Home',Home);

export default router
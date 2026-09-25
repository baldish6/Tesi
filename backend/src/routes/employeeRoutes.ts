import express, { type Router } from "express";
import { addEmployee } from "../controller/employeeController.js";

const router: Router = express.Router();

//router.get("/get");

router.get("/add", addEmployee);

export default router;

import express, { type Router } from "express";
import {
  createEmployee,
  findEmpolyeeById,
  updateEmpolyee,
  deleteEmployee,
} from "../controller/employeeController.js";

const router: Router = express.Router();

router.post("/add", createEmployee);
router.get("/get/:id", findEmpolyeeById);
router.put("/upd/:id", updateEmpolyee);
router.delete("/del/:id", deleteEmployee);

export default router;

import express from 'express';
import { getAllEmployee,getEmployee,updateEmployee,createEmployee,deleteEmployee } from '../controllers/employee.js';

const router = express.Router();

// Define your employee routes here

router.get("/", getAllEmployee);

router.post("/", createEmployee);

router.get("/:id", getEmployee);

router.delete("/:id", deleteEmployee);

router.put("/:id",updateEmployee);

export default router;
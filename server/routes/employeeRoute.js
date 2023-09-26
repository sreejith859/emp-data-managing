import express from "express";
import {
  addEmpController,
  deleteEmpController,
  getEmpController,
  updateEmpController,
} from "../controllers/employeeController.js";

//router object
const router = express.Router();

//routing
//add employee
router.post("/add-emp", addEmpController);
//update employee
router.put("/update-emp", updateEmpController);
//update employee
router.put("/delete-emp/:eid", deleteEmpController);
//update employee
router.put("/get-emp", getEmpController);

export default router;
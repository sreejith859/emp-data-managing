import employeeModel from "../models/employeeModel.js";

//add emp
export const addEmpController = async (req, res) => {
  try {
    const { name, empID, email, phone, DOJ, position } = req.body;
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!empID) {
      return res.send({ error: "EMPID is Required" });
    }
    if (!email) {
      return res.send({ error: "email is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phone number is Required" });
    }
    if (!DOJ) {
      return res.send({ error: "Date Of Joining is Required" });
    }
    if (!position) {
      return res.send({ error: "Position is Required" });
    }
    //for check employee
    const existingEmployee = await employeeModel.findOne({ empID });
    //for check re-entries of employee
    if (existingEmployee) {
      return res.status(200).send({
        success: true,
        message: "existing employee or check deatails",
      });
    }
    //save
    const employee = await new employeeModel({
      name,
      empID,
      email,
      phone,
      DOJ,
      position,
    }).save();
    res.status(201).send({
      success: true,
      message: "employee added succefully",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Adding Employee",
      error,
    });
  }
};

//update emp
export const updateEmpController = async (req, res) => {
  try {
    const { name, empID, email, phone, DOJ, position } = req.body;
    const employee = await employeeModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        empID,
        email,
        phone,
        DOJ,
        position,
      },
      { new: true } 
    );

    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      updatedEmployee: employee,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error while updating employee",
      error,
    });
  }
};
//delete emp
export const deleteEmpController = async (req, res) => {
  try {
    await employeeModel.findByIdAndDelete(req.params.eid);
    res.status(200).send({
      success: true,
      message: "employee deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in deleting employee",
      error,
    });
  }
};
//get emp
export const getEmpController = async (req, res) => {
  try {
    const employee = await employeeModel.find({});
    res.status(200).send({
      success: true,
      message: "employee data loaded successfully",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting employee data",
      error,
    });
  }
};

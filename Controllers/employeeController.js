import Employees from "../Models/employeeschema.js";

export const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employees(req.body);
    await newEmployee.save();
    res
      .status(200)
      .json({ message: "Employee Created", result: [newEmployee] });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server error in create employee" });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employee = await Employees.find();
    res.status(200).json({ message: "Employee Fetched", result: employee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error in get employee" });
  }
};
export const getEmployeeById = async (req, res) => {
    try {
       const empId = req.params.id; 
      const employee = await Employees.findById(empId);
      if(!employee){
        res.status(404).send("Employee not found");
      }
      res.status(200).json({ message: "Employee Fetched", result: employee });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error in getbyid employee" });
    }
  };


export const updateEmployee = async(req,res)=>{
try {
     const empId = req.params.id;
     const{employeeFirstName,employeeLastName,employeeEmail,employeeDesignation} = req.body;
     const results = await Employees.updateOne({_id:empId},{employeeFirstName,employeeLastName,employeeEmail,employeeDesignation});
     if(results.matchedCount===0){
        return res.status(404).json({message:"Employee not found"})
     }
     const updatedemployee = await Employees.find({_id:empId});
     
     res.status(200).json({ message: "Employee updated", result: updatedemployee });




} catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error in edit employee" });
}
  }


export const deleleEmployee = async(req,res)  =>{
    try {
        const empId = req.params.id;
        const deletedEmp = await Employees.deleteOne({_id:empId});
        if(!deletedEmp){
            res.status(404).json({message:"Employee not found"});
        }
        res.status(200).json({message:"Employee deleted successfully"});
    } catch (error) {
        
    }
}

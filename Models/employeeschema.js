import mongoose from "mongoose";
const employeeschema = mongoose.Schema({
    employeeFirstName:String,
    employeeLastName:String,
    employeeEmail:String,
    employeeDesignation:String
});
const Employees = mongoose.model("Employees",employeeschema);
export default Employees;
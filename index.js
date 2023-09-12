// Write your solution in this file!
const employee={
    name:"Angela",
    streetAddress:"3598-100",
};

function updateEmployeeWithKeyAndValue(employee,key,value) {
const newEmployee={...employee};
newEmployee[key]=value;
return newEmployee;

}
const newEmployeeInstance= updateEmployeeWithKeyAndValue(employee,"Natalie","13 paris");

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee.name="Sam";
employee.streetAddress="12 Broadway";
return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee={... employee};
    delete newEmployee[key];
    return newEmployee;
 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
 delete employee.name;
 delete employee.streetAddress;
 return employee;
}

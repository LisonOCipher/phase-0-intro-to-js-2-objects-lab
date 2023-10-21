const employee = { name: 'Sam' };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a clone of the original employee and add the new key-value pair
  const updatedEmployee = { ...employee, [streetAddress]: '11 Broadway' };
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Update the original employee destructively and return the updated employee
  employee[streetAddress] = '12 Broadway';
  return employee;
}

function deleteFromEmployeeByKey(employee, name) {
  // Create a clone of the original employee without the specified key
  const updatedEmployee = { ...employee };
  delete updatedEmployee[name];
  return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
  // Delete the specified key from the original employee destructively
  delete employee[name];
  return employee;
}



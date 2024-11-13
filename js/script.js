// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// Geting the form and employee table elements
const employeeForm = document.getElementById("addForm");
const employeeTable = document.getElementById("employees");
const employeeCountDisplay = document.getElementById("empCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

// Initializeing the employee count variable
let employeeCount = 0;

// Updateing the employee count in the output
function updateEmployeeCount() {
  employeeCountDisplay.textContent = employeeCount;
}

// Form submission
// ADD EMPLOYEE
employeeForm.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES
  const employeeID = document.getElementById("id").value;
  const employeeName = document.getElementById("name").value;
  const employeeExtension = document.getElementById("extension").value;
  const employeeEmail = document.getElementById("email").value;
  const employeeDepartment = document.getElementById("department").value;

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  let newEmployeeRow = employeeTable.insertRow();
  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  // Insert a new cell for each piece of data
  let cellEmployeeID = newEmployeeRow.insertCell();
  cellEmployeeID.appendChild(document.createTextNode(employeeID));

  let cellEmployeeName = newEmployeeRow.insertCell();
  cellEmployeeName.appendChild(document.createTextNode(employeeName));

  let cellEmployeeExtension = newEmployeeRow.insertCell();
  cellEmployeeExtension.appendChild(document.createTextNode(employeeExtension));

  let cellEmployeeEmail = newEmployeeRow.insertCell();
  cellEmployeeEmail.appendChild(document.createTextNode(employeeEmail));

  let cellEmployeeDepartment = newEmployeeRow.insertCell();
  cellEmployeeDepartment.appendChild(
    document.createTextNode(employeeDepartment)
  );

  // CREATE THE DELETE BUTTON
  // Insert a cell for the delete button
  let cellDeleteButton = newEmployeeRow.insertCell();
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.addEventListener("click", removeEmployee);
  cellDeleteButton.appendChild(deleteButton);

  // RESET THE FORM
  // Clear the form after submission
  employeeForm.reset();
  // SET FOCUS BACK TO THE ID TEXT BOX
  document.getElementById("id").focus();
  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  employeeCount++;
  updateEmployeeCount();
});

// DELETE EMPLOYEE
// Function to delete an employee from the table
function removeEmployee(event) {
  if (confirm("Are you sure you want to delete this employee?")) {
    // Get the row of the clicked delete button
    let rowToDelete = event.target.parentNode.parentNode;

    // Remove the employee row from the table
    employeeTable.deleteRow(rowToDelete.rowIndex);

    // Decrement the employee count and update the display
    employeeCount--;
    updateEmployeeCount();
  }
}

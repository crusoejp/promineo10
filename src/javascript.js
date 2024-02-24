// add driver takes the content of the input fields and adds a new driver to the list
const addDriver = () => {
  // get the value of the input fields
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const team = document.getElementById("team").value;

  // if any of the input fields are empty, alert the user and return
  if (!firstName || !lastName || !team) {
    alert("Please fill out all fields");
    return;
  }

  // create a new table row
  const newRow = document.createElement("tr");

  // create a new table data for each input field
  const firstNameCell = document.createElement("td");
  const lastNameCell = document.createElement("td");
  const teamCell = document.createElement("td");

  // set the content of the table data to the value of the input fields
  firstNameCell.textContent = firstName;
  lastNameCell.textContent = lastName;
  teamCell.textContent = team;

  const cellPadding = "8px";
  firstNameCell.style.padding = cellPadding;
  lastNameCell.style.padding = cellPadding;
  teamCell.style.padding = cellPadding;

  // append the table data to the table row
  newRow.appendChild(firstNameCell);
  newRow.appendChild(lastNameCell);
  newRow.appendChild(teamCell);

  // append the table row to the table
  document.getElementById("drivers").appendChild(newRow);

  // clear the input fields
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("team").value = "";

  // style the new row
  newRow.style.color = "black";
  newRow.style.textAlign = "center";
  newRow.style.fontSize = "1rem";
};

// when the button with id "add-driver-button" is clicked, the function "addDriver" is called
document.getElementById("btn").addEventListener("click", addDriver);

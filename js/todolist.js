const todoliste =JSON.parse(localStorage.getItem('todoliste'))||[];

// Function to handle adding new items to the todo list
function clickToad() {
    document.getElementById('Add').addEventListener('click', function () {
        let display = document.getElementById('Todolist').value.trim();
        if (display) {
            todoliste.push(display); // Add the new todo item
            displaytodolist(); // Display the updated todo list
            localStorage.setItem('todoliste',JSON.stringify(todoliste));
            showCustomAlert('succefully saved');
        }
        document.getElementById('Todolist').value = ''; // Clear input field
    });
}

// Function to display the todo list
function displaytodolist() {
    let output = ''; // Initialize output
    for (let i = 0; i < todoliste.length; i++) {
        output += `
          <tr>
            <td>${i + 1}. ${todoliste[i]}</td>
            <td>
              <button onclick="dele(${i})">
                <i class="fas fa-trash-alt"></i>
              </button>
                 <button onclick="startUpdate(${i})">
                <i class="fas fa-edit"></i>
              </button>
            </td>
            
            
          </tr>
          
          <tr><td colspan="2"><hr></td></tr>
        `; // Use a blue trash can icon
    }
    document.getElementById('diplayTodo').innerHTML = output; // Update display area
}
function startUpdate(index) {
    const currentItem = todoliste[index]; // Get the current item
    const newInput = 
    //document.getElementById('diplayTodo').inn=currentItem;
    prompt("Update your to-do item:", currentItem); // Prompt user for new input
    if (newInput !== null && newInput.trim() !== "") {
        update(index, newInput); // Call the update function with the new value
    }
}

// Function to update an item in the todo list
function update(index, newValue) {
    todoliste[index] = newValue; // Update the item in the array
    localStorage.setItem('todoliste', JSON.stringify(todoliste)); // Update local storage
    displaytodolist(); // Refresh the display
    showCustomAlert('succefully updated');
}


// Function to delete an item from the todo list
function dele(index) {
  if(confirm(`are you sure you want to delete "${todoliste[index]}"?`)){
    todoliste.splice(index, 1); // Remove the item at the specified index
    displaytodolist(); // Refresh the display
    localStorage.setItem('todoliste',JSON.stringify(todoliste));
    clickToad();
    showCustomAlert('succefully deleted');
  }
}
document.addEventListener('DOMContentLoaded', displaytodolist)
// Initialize the event listener for adding todos
clickToad();

function showCustomAlert(message) {
  const alertBox = document.getElementById('customAlert');
  alertBox.textContent = message; // Set the 
  alertBox.style.display = 'block'; // Make the alert visible
  alertBox.style.opacity = '1'; // Ensure it starts fully visible

  // Fade out after 3 seconds
  setTimeout(() => {
    alertBox.style.opacity = '0'; // Start fading out
    setTimeout(() => {
      alertBox.style.display = 'none'; // Hide the alert after fading
    }, 500); // Match this with the CSS transition duration
  }, 3000); // Alert visible for 3 seconds
}





/*
const todoliste = JSON.parse(localStorage.getItem('todoliste')) || [];

// Function to handle adding new items to the todo list
function clickToad() {
    document.getElementById('Add').addEventListener('click', function () {
        let display = document.getElementById('Todolist').value.trim();
        if (display) {
            todoliste.push(display); // Add the new todo item
            displaytodolist(); // Display the updated todo list
            localStorage.setItem('todoliste', JSON.stringify(todoliste));
        }
        document.getElementById('Todolist').value = ''; // Clear input field
    });
}

// Function to display the todo list
function displaytodolist() {
    let output = ''; // Initialize output
    for (let i = 0; i < todoliste.length; i++) {
        output += `
          <tr>
            <td>${i + 1}. ${todoliste[i]}</td>
            <td>
              <button onclick="dele(${i})">
                <i class="fas fa-trash-alt"></i>
              </button>
              <button onclick="startUpdate(${i})">
                <i class="fas fa-edit"></i>
              </button>
            </td>
          </tr>
          <tr><td colspan="2"><hr></td></tr>
        `;
    }
    document.getElementById('diplayTodo').innerHTML = output; // Update display area
}

// Function to delete an item from the todo list
function dele(index) {
    if (confirm(`Are you sure you want to delete "${todoliste[index]}"?`)) {
        todoliste.splice(index, 1); // Remove the item at the specified index
        displaytodolist(); // Refresh the display
        localStorage.setItem('todoliste', JSON.stringify(todoliste));
    }
}

// Function to start updating an item
function startUpdate(index) {
    const currentItem = todoliste[index]; // Get the current item
    const newInput = prompt("Update your to-do item:", currentItem); // Prompt user for new input
    if (newInput !== null && newInput.trim() !== "") {
        update(index, newInput); // Call the update function with the new value
    }
}

// Function to update an item in the todo list
function update(index, newValue) {
    todoliste[index] = newValue; // Update the item in the array
    localStorage.setItem('todoliste', JSON.stringify(todoliste)); // Update local storage
    displaytodolist(); // Refresh the display
}

document.addEventListener('DOMContentLoaded', displaytodolist);
// Initialize the event listener for adding todos
clickToad();

*/
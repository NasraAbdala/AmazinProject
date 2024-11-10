const todlist=[];
document.getElementById('add').addEventListener('click',function(){
  let print=document.getElementById('display').value;
  todlist.push(print);
  document.getElementById('show').innerText=todlist;
  //console.log(todlist);
  document.getElementById('display').value=''
});
const todolists =JSON.parse(localStorage.getItem('todolists'))||[];

function Todolist() {
 
  let displaytodo=document.getElementById('displayloops').value.trim();
  let datetime=document.getElementById('date-time').value.trim();
    if (displaytodo && datetime) {
    todolists.push({displaytodo,datetime});
   localStorage.setItem('todolists',JSON.stringify(todolists))
   showCustomAlert('saucefull saved')
    }
  //todolists.push(datetime);
  
  let output=''
  todolists.forEach(function (todolists,i) {
    output+=`<div>${i+1}.${todolists.displaytodo}- ${todolists.datetime} <button onclick="
    dele(${i})todolists
    ">Delete</button> </div>`
   
    
  })



/*
  let output='';
  for(let i=0;i<todolists.length;i++){
    output+=`<div>${i+1}.${todolists[i].displaytodo}- ${todolists[i].datetime} <button onclick="
    dele(${i})
    ">Delete</button> </div>`
    
    
  }
  */
  document.getElementById('loppsTodolist').innerHTML=output || 'No items in the list.';

  document.getElementById('displayloops').value='';
  document.getElementById('date-time').value='';
}
function showCustomAlert(message) {
  const alertBox = document.getElementById('customAlert');
  alertBox.textContent = message; // Set the message
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
function dele(indexe) {
  const deletedis=todolists[indexe].displaytodo;
  if(confirm(`are you want to delet this "${todolists[indexe].displaytodo} and time ${todolists[indexe].datetime}"?`)){
  todolists.splice(indexe,1);
  localStorage.setItem('todolists',JSON.stringify(todolists));
  showCustomAlert(`Successfully deleted ${deletedis}`);
  Todolist();
  }
}
document.addEventListener('DOMContentLoaded', Todolist);
const todista = [];

function Todolis() {
  let displaytodo = document.getElementById('displayloops').value;
  todolista.push(displaytodo);
  
  let output = '';
  for (let i = 0; i < todolista.length; i++) {
    output += `<div>${i + 1}. ${todolista[i]} <button onclick="">Delete</button></div>`;
    
    
    
    
  }
  
  document.getElementById('loppsTodolist').innerHTML = output;
  document.getElementById('displayloops').value = '';
}








const todolista = [];

function Toist() {
  let displaytodo = document.getElementById('displayloops').value;
  todolista.push(displaytodo);

  let output = '';
  let i = 0;
  while (i < todolista.length) {
    output += `<div>${i + 1}. ${todolista[i]} <button onclick="">Delete</button></div>`;
    i++;
  }

  document.getElementById('loppsTodolist').innerHTML = output;
  document.getElementById('displayloops').value = '';
}

function deleteTodo(index) {
  todolista.splice(index, 1);
  Todolist(); // Refresh the list after deletion
}


/*
const todo = [];

function hgg() {
  let displayelement = document.getElementById('displayloops').value;
  todo.push(displayelement);

  // Create an array of strings with index and value
  const todoListWithIndex = todo.map((item, index) => `${index}: ${item}`);

  // Display each item with its index in a new line
  document.getElementById('loppsTodolist').innerText = todoListWithIndex.join('\n');
}
*/




const todoits = []; // Define todolists globally

function Tdolist() {
  let displaytodo = document.getElementById('displayloops').value.trim(); // Use trim() to avoid adding empty strings
  if (displaytodo) {
    todolists.push(displaytodo);
  }

  renderList(); // Call the function to render the list
  document.getElementById('displayloops').value = ''; // Clear the input
}

function renderList() {
  let output = '';
  for (let i = 0; i < todolists.length; i++) {
    output += `<div>${i + 1}. ${todolists[i]} 
    <button onclick="deleteTodo(${i})">Delete</button></div>`;
  }

  document.getElementById('loppsTodolist').innerHTML = output || 'No items in the list.'; // Show message if empty
}

function deleteTodo(index) {
  todolists.splice(index, 1); // Remove the item at the specified index
  renderList(); // Refresh the list after deletion
}






let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    input.value = "";  
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);  
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("todoList");
  list.innerHTML = ""; 

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

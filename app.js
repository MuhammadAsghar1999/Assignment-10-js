const taskInput = document.getElementById('task');
const todoList = document.getElementById('todo-list');
const deleteAllButton = document.getElementById('delete-all');

// Add a task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    todoList.appendChild(taskItem);
    taskInput.value = '';
}

// Edit a task
function editTask(button) {
    const taskText = button.previousElementSibling;
    const newText = prompt('Edit the task:', taskText.textContent);
    if (newText !== null) {
        taskText.textContent = newText;
    }
}

// Delete a task
function deleteTask(button) {
    const taskItem = button.parentElement;
    todoList.removeChild(taskItem);
}

// Delete all tasks
function deleteAllTasks() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}

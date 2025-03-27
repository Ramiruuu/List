function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" onchange="toggleComplete(this)">
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function toggleComplete(checkbox) {
    const li = checkbox.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
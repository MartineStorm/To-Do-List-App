const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const RemoveBtn = document.createElement('button');
    RemoveBtn.textContent = 'Remove'
    RemoveBtn.className = 'remove-btn';
    RemoveBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);

    li.oneclick = function() {
        li.classList.toggle('completed');
    };

    taskList.appendChild(li);
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    addTask();
   }
});
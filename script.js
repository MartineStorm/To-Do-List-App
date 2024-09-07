
console.log('Script loaded');

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const sharebtn = document.getElementById('share-btn');

function addTask() {
    const taskText = taskInput.value.trim();
    console.log('Task to add:', taskText);

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove'
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);

    li.onclick = function() {
        li.classList.toggle('completed');
    };

    taskList.appendChild(li);

    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    addTask();
   }
});

function getTaskListString() {
    let tasks = [];
    const taskItems = taskList.querySelectorAll('li');
    taskItems.forEach(item => {
        tasks.push(item-textContent.replace('remove', '').trim());
    });
    return tasks.join(', ');
}

function shareOnMessenger() {
    const taskString = getTaskListString();
    if (taskString) {
        const messsengerShareUrl = `https://www.messenger.com/t/?text=${encodeURIComponent("My To-Do List: " + taskString)}`;
        window.open(messengerShareUrl, '_blank');
    } else {
        alert('Your to-do list is empty. Add some tasks before sharing!');
    }
 }

 sharebtn.addEventListener('click', shareOnMessenger);
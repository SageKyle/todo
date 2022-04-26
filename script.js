
const form = document.querySelector('form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load Event Listeners
loadEventListeners();

function loadEventListeners() {
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add Tasks Function
    form.addEventListener('submit', addTask);

    // Remove task
    taskList.addEventListener('click', removeTask);

    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// Get Tasks
function getTasks(){
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // Add an li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Add Text Node
    li.appendChild(document.createTextNode(task));
    // Create a new link tag
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    });
};

// Add Tasks
function addTask(e) {
    if (taskInput.value === '') {
        alert('Please enter some text');
    }

    // Add an li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Add Text Node
    li.appendChild(document.createTextNode(taskInput.value));
    // Create a new link tag
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append link to li
    li.appendChild(link);


    // Append li to ul
    taskList.appendChild(li);

    // Add task to Local Storage
    addTaskToLocalStorage(taskInput.value);

    // Clear task input
    taskInput.value = '';

    e.preventDefault();
}

// Remove tasks
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();

            // Remove task from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }

}

// Romove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    console.log(taskItem);

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clear Tasks
function clearTasks(e) {
    if(confirm('Are you sure you want to clear all tasks')) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // Clear Tasks From Local Storage
        clearTasksFromLocalStorage();
    }
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
};

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;

            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );

}

// Store Tasks
function addTaskToLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
const inputTask = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const Tasks = document.querySelector('.tarefas');

function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function cleanInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createDeleteButton(li) {
    li.innerText += ' ';
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Apagar';
    buttonDelete.setAttribute('class', 'apagar');
    buttonDelete.setAttribute('tittle', 'Apagar esta tarefa');
    li.appendChild(buttonDelete);
}

function createTask(textInput) {
    const li = createLi();
    li.innerHTML = textInput;
    Tasks.appendChild(li);
    cleanInput();
    createDeleteButton(li);
    saveTasks();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function (e) {
    const el = e.target



    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = Tasks.querySelectorAll('li');
    const listOfTasks = [];


    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        listOfTasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(listOfTasks);
    localStorage.setItem('Tasks', tasksJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('Tasks');
    const listOfTasks = JSON.parse(tasks);


    for (let task of listOfTasks) {
        createTask(task);
    }
}
addSavedTasks();
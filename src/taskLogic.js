const taskLogicObject = {
  createTask() {
    const bigTodosContainer = document.querySelector('.big-todos-containers');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('tasks-containers', 'row');
    bigTodosContainer.appendChild(taskContainer);

    const leftTask = document.createElement('div');
    leftTask.classList.add('left-task', 'col-8', 'row');
    taskContainer.appendChild(leftTask);

    const rightTask = document.createElement('div');
    rightTask.classList.add('task-time', 'right-task', 'col-4');
    taskContainer.appendChild(rightTask);
    rightTask.textContent = document.getElementById('date').value;
    document.getElementById('date').value = '';

    const checkBox = document.createElement('div');
    checkBox.classList.add('checkbox', 'col-6');
    leftTask.appendChild(checkBox);

    const taskName = document.createElement('div');
    taskName.classList.add('task-name', 'row', 'col-8');
    leftTask.appendChild(taskName);
    taskName.textContent = document.getElementById('task').value;
    document.getElementById('task').value = '';
  },
};

export default taskLogicObject;

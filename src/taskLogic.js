import projectsObject from './projectsLogic';

const Task = class {
  constructor(title, date) {
    this.title = title;
    this.date = date;
    this.checked = false;
  }
};

const taskLogicObject = {
  createTask() {
    const name = document.getElementById('task').value;
    const date = document.getElementById('date').value;
    const newTask = new Task(name, date);

    return newTask;
  },
  displayTask(taskObject) {
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
    rightTask.textContent = taskObject.date;
    document.getElementById('date').value = '';

    const checkBox = document.createElement('div');
    checkBox.classList.add('checkbox', 'col-6');
    leftTask.appendChild(checkBox);

    const taskName = document.createElement('div');
    taskName.classList.add('task-name', 'col-6');
    leftTask.appendChild(taskName);
    taskName.textContent = taskObject.title;
    document.getElementById('task').value = '';
  },
  pushTaskInProject(taskObject) {
    const projectTitle = document.querySelector(
      '.project-todo-title'
    ).textContent;

    const isTheSameName = (eachProject) => eachProject.title === projectTitle;

    const indexOfArray = projectsObject.projectsArray.findIndex(isTheSameName);
    projectsObject.projectsArray[indexOfArray].tasks.push(taskObject);
  },
};

export default taskLogicObject;

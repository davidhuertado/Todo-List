import projectsObject from './projectsLogic';

const Task = class {
  constructor(title, date) {
    this.title = title;
    this.date = date;
    this.checked = false;
  }
};

const taskLogicObject = {
  taskDisplayed: false,
  createTask() {
    const name = document.getElementById('task').value;
    const date = document.getElementById('date').value;
    if (name === '' || name.length < 2) {
      document.getElementById('task').value = '';
      document.getElementById('date').value = '';
      alert('You have to enter a valid task name. 2 characters minimum');
      return -1;
    }
    const newTask = new Task(name, date);

    return newTask;
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

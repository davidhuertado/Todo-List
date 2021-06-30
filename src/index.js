import projectsObject from './projectsLogic';
import taskLogicObject from './taskLogic';
import domObject from './DomLogic';

const saveProject = document.getElementById('save-project');
const projectsUl = document.querySelector('.projects-ul');
const saveTask = document.getElementById('save-task');
const bigTodosContainer = document.querySelector('.big-todos-containers');

//CREATE TASK
saveTask.addEventListener('click', function () {
  const taskObject = taskLogicObject.createTask();
  taskLogicObject.pushTaskInProject(taskObject);
  domObject.displayTask(taskObject);
});

//CREATE PROJECT AND DISPLAY PROJECT
saveProject.addEventListener('click', function () {
  const newProject = projectsObject.createAddProject();
  projectsObject.projectsArray.push(newProject);
  domObject.displayProjects(projectsObject);
});

//DISPLAY TASKS OF PROJECT
projectsUl.addEventListener('click', function (e) {
  if (e.target.classList.contains('project-name')) {
    //Undisplay previous project
    if (taskLogicObject.taskDisplayed === true) {
      const projectNameDisplayed = document.querySelector(
        '.project-todo-title'
      ).textContent;
      const projectDisplayed = projectsObject.projectsArray.find(
        (project) => project.title === projectNameDisplayed
      );
      projectDisplayed.taskDisplayed = false;
    }

    const projectName = e.target.textContent;
    const isTheSameProjectName = function (eachProject) {
      return eachProject.title === projectName;
    };
    //Find the index of the project to display
    const projectIndex =
      projectsObject.projectsArray.findIndex(isTheSameProjectName);
    //Display name of the project
    document.querySelector('.project-todo-title').textContent =
      projectsObject.projectsArray[projectIndex].title;

    projectsObject.projectsArray[projectIndex].taskDisplayed = true;

    //Clear the task display
    const parentOfChilds = document.querySelector('.big-todos-containers');
    while (parentOfChilds.firstChild) {
      parentOfChilds.removeChild(parentOfChilds.firstChild);
    }
    taskLogicObject.taskDisplayed = true;
  }
});

//CHECK AND UNCHECK LISTENER
bigTodosContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('checkbox')) {
    e.target.classList.toggle('checked');
    const taskName = e.target.nextElementSibling.textContent;
    //Find project displayed
    const projectDisplayed = projectsObject.projectsArray.find(
      (project) => project.taskDisplayed === true
    );
    const taskToCheck = projectDisplayed.tasks.find(
      (task) => task.title === taskName
    );

    taskToCheck.checked === true
      ? (taskToCheck.checked = false)
      : (taskToCheck.checked = true);
  }
});
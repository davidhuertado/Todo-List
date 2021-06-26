import projectsObject from './projectsLogic';
import taskLogicObject from './taskLogic';
const saveProject = document.getElementById('save-project');
const projectsUl = document.querySelector('.projects-ul');
const saveTask = document.getElementById('save-task');

//TASK LOGIC
saveTask.addEventListener('click', function () {
  taskLogicObject.createTask();
});

saveProject.addEventListener('click', function () {
  const newProject = projectsObject.createAddProject();
  projectsObject.projectsArray.push(newProject);
  projectsObject.displayProjects();
  console.log(projectsObject.projectsArray);
});

projectsUl.addEventListener('click', function (e) {
  if (e.target.classList.contains('project-name')) {
    const projectName = e.target.textContent;
    const findIndexProject = function (eachProject) {
      return eachProject.title === projectName;
    };
    //Find the index of the project to display
    const projectIndex =
      projectsObject.projectsArray.findIndex(findIndexProject);
    //Display name of the project
    document.querySelector('.project-todo-title').textContent =
      projectsObject.projectsArray[projectIndex].title;

    //Clear the task display
    const parentOfChilds = document.querySelector('.big-todos-containers');
    while (parentOfChilds.firstChild) {
      parentOfChilds.removeChild(parentOfChilds.firstChild);
    }
  }
});

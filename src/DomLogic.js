import projectsObject from './projectsLogic';
import taskLogicObject from './taskLogic';

const domObject = {
  displayProjects(projectsObject) {
    projectsObject.projectsArray.forEach((project) => {
      if (!project.display) {
        project.display = true;
        const projectLi = document.createElement('li');
        projectLi.classList.add('nav-item');

        const projectA = document.createElement('a');
        projectA.classList.add('nav-link', 'project-name');
        projectA.textContent = project.title;
        projectA.href = '#';
        document.getElementById('project').value = '';

        projectLi.appendChild(projectA);
        projectsObject.projectUl.appendChild(projectLi);
      }
    });
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
};

export default domObject;

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
    leftTask.classList.add(
      'left-task',
      'col-6',
      'd-flex',
      'justify-content-start',
      'align-items-center'
    );
    taskContainer.appendChild(leftTask);

    const rightTaskDiv = document.createElement('div');
    rightTaskDiv.classList.add(
      'right-task',
      'col-6',
      'd-flex',
      'justify-content-end',
      'align-items-center'
    );
    taskContainer.appendChild(rightTaskDiv);

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('d-flex', 'align-items-center');
    rightTaskDiv.appendChild(dateContainer);

    if (taskObject.date !== '') {
      const dateH = document.createElement('h4');
      const dateArray = taskObject.date.split('-');
      dateH.textContent = `${dateArray[2]} - ${dateArray[1]}`;
      dateH.classList.add('task-date');
      dateContainer.appendChild(dateH);
      document.getElementById('date').value = '';
    }

    const checkBox = document.createElement('div');
    if (taskObject.checked === true)
      checkBox.classList.add('checkbox', 'col-6', 'checked');
    else checkBox.classList.add('checkbox', 'col-6');
    leftTask.appendChild(checkBox);

    const taskName = document.createElement('div');
    taskName.classList.add(
      'task-name',
      'col-6',
      'd-flex',
      'align-items-center'
    );
    leftTask.appendChild(taskName);
    taskName.textContent = taskObject.title;
    document.getElementById('task').value = '';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add(
      'btn',
      'btn-danger',
      'btn-sm',
      'd-flex',
      'align-items-center',
      'delete-btn'
    );
    deleteButton.textContent = 'Delete';
    rightTaskDiv.appendChild(deleteButton);
  },
};

export default domObject;

const Project = class {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.display = false;
    this.taskDisplayed = false;
  }
};

const projectsObject = {
  projectsArray: [],
  projectUl: document.querySelector('.projects-ul'),

  //Methods
  createAddProject: function () {
    const projectName = document.getElementById('project').value;
    const newProject = new Project(projectName);

    return newProject;
  },
  displayProjects: function () {
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
};

export default projectsObject;

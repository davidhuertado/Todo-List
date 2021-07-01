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

  createAddProject() {
    const projectName = document.getElementById('project').value;
    if (projectName === '' || projectName.length < 2) {
      document.getElementById('project').value = '';
      return -1;
    }
    const newProject = new Project(projectName);

    return newProject;
  },

  isTheSameProjectName(project, nameToFind) {
    return project.title === nameToFind;
  },
};

export default projectsObject;

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
    if (projectName === '' || projectName.length < 2) {
      document.getElementById('project').value = '';
      return alert(
        'You have to enter a valid project name. 2 characters minimum'
      );
    }
    const newProject = new Project(projectName);

    return newProject;
  },
};

export default projectsObject;

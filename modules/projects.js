import Project from "./project.js";

export default class Projects {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Sample Project"));
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }
}

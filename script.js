import Project from "./modules/project.js";
import Projects from "./modules/projects.js";
import Interface from "./modules/interface.js";

const projectsContainer = document.querySelector(".nav-project-list");
let projects = new Projects();

const render = () => {
  projects.projects.forEach((proj) => {
    Interface.renderProject(proj);
  });

  if (projects.projects[0]) {
    Interface.renderTasks(projects.projects[0]);
  }
};

function clearElement(project) {}

render();

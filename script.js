import Project from "./modules/project.js";
import Projects from "./modules/projects.js";
import Interface from "./modules/interface.js";
import Task from "./modules/task.js";

const projectsContainer = document.querySelector(".nav-project-list");
let projects = new Projects();
let projectsArr = projects.projects;
const newProjectForm = document.querySelector(".new-project-form");
const newProjectInput = document.querySelector(".new-project-input");
const newTaskForm = document.querySelector(".new-task-form");
const newTaskInput = document.querySelector(".new-task-input");
const projectTitle = document.querySelector(".project-title");
newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === "") {
    return;
  }
  const newProject = new Project(projectName);
  projectsArr.push(newProject);
  Interface.renderProject(newProject);
  console.log(projectsArr);
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName == null || taskName === "") {
    return;
  }
  const newTask = new Task(taskName);

  const currentProject = projects.findProject(projectTitle.innerText);
  console.log(currentProject);
  currentProject.addTask(newTask);
  Interface.renderTask(newTask);
});

const render = () => {
  projectsArr.forEach((proj) => {
    Interface.renderProject(proj);
  });

  if (projectsArr[0]) {
    Interface.renderProjectTitle(projectsArr[0]);
    Interface.renderTasks(projectsArr[0]);
  }
};

render();

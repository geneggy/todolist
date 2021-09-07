export default class Interface {
  static renderProject(project) {
    const projectsContainer = document.querySelector(".nav-project-list");
    const projectItemEl = document.createElement("li");
    projectItemEl.classList.add("nav-project");
    const projectItemName = document.createElement("h4");
    projectItemName.innerText = `${project.name}`;
    const removeProjBtn = document.createElement("button");
    removeProjBtn.classList.add("remove-project-btn");
    removeProjBtn.innerText = "Remove";
    projectItemEl.appendChild(projectItemName);
    projectItemEl.appendChild(removeProjBtn);
    projectItemEl.addEventListener("click", () => this.renderTasks(project));
    projectsContainer.appendChild(projectItemEl);
  }

  static renderProjectTitle(title) {}

  static renderTask(task) {
    const taskListEl = document.querySelector(".task-list");
    const newTaskEl = document.createElement("li");
    newTaskEl.classList.add("task-list-item");
    const taskNameEl = document.createElement("h3");
    taskNameEl.classList.add("task-name");
    taskNameEl.innerText = task.name;
    const taskDateEl = document.createElement("p");
    taskDateEl.classList.add("task-date");
    taskDateEl.innerText = task.date;
    const removeTaskBtn = document.createElement("button");

    removeTaskBtn.classList.add("remove-task-btn");
    removeTaskBtn.innerText = "Remove";

    newTaskEl.appendChild(taskNameEl);
    newTaskEl.appendChild(taskDateEl);
    newTaskEl.appendChild(removeTaskBtn);
    taskListEl.appendChild(newTaskEl);
  }

  static renderTasks(project) {
    const projectTitleEl = document.querySelector(".project-title");
    projectTitleEl.innerText = project.name;
    const taskListEl = document.querySelector(".task-list");
    taskListEl.innerHTML = "";
    project.tasks.forEach((task) => {
      this.renderTask(task);
    });
  }
}

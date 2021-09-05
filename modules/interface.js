export default class Interface {
  static renderProject(project) {
    const projectsContainer = document.querySelector(".nav-project-list");
    const listItemEl = document.createElement("li");
    listItemEl.classList.add("nav-project");
    const listItemName = document.createElement("h4");
    listItemName.innerText = `${project.name}`;
    const removeProjBtn = document.createElement("button");
    removeProjBtn.classList.add("remove-project-btn");
    removeProjBtn.innerText = "Remove";
    listItemEl.appendChild(listItemName);
    listItemEl.appendChild(removeProjBtn);
    listItemEl.addEventListener("click", () => this.renderTasks(project));
    projectsContainer.appendChild(listItemEl);
  }

  static renderTasks(project) {
    const projectTitleEl = document.querySelector(".project-title");
    projectTitleEl.innerText = project.name;
    const taskListEl = document.querySelector(".task-list");
    taskListEl.innerHTML = "";
    project.tasks.forEach((task) => {
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
    });
  }
}

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setTitle(name) {
    this.name = name;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getTasks() {
    return this.tasks;
  }
}

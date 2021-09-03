export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  setTitle(title) {
    this.title = title;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    deleteTask(taskName) {
      this.tasks = this.tasks.filter((task) => task.name !== taskName)
    }
  }

  getTasks() {
    return this.tasks;
  }

}

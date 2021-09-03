export default class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  setName(name) {
    this.name = name;
  }

  setDescription(des) {
    this.description = des;
  }

  setDate(date) {
    this.dueDate = date;
  }

  setPriority(prio) {
    this.priority = prio;
  }

  getName() {
    return this.name;
  }

  getDate() {
    return this.Date;
  }

  getPriority() {
    return this.priority;
  }

  getDescription() {
    return this.description;
  }
}

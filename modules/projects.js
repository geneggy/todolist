import Project from "./project.js";

export default class Projects {
  constructor() {
    this.projects = [
      // {
      //   name: "potato-project",
      //   tasks: [
      //     { name: "task1", date: "8.1.12" },
      //     { name: "task2", date: "8.1.12" },
      //     { name: "task3", date: "8.1.12" },
      //   ],
      // },
      // { name: "potato-project2", tasks: [{ name: "task27", date: "8.1.12" }] },
      // { name: "potato-project3", tasks: [{ name: "task1", date: "8.1.12" }] },
      // { name: "potato-project4", tasks: [{ name: "task1", date: "8.1.12" }] },
    ];
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }

  findProject(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }
}

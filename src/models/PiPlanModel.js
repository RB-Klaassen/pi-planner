export default class PiPlan {
  constructor(options = {}) {
    this.id = new Date().getTime().toString(); // unique ID for this Pi plan
    this.name = options.name || "New Pi plan";
    this.start = options.start || new Date();
    this.end = options.start || new Date();
    this.status = options.status || "New"; // New | Active | Closed
    this.projects = options.projects || []; // array of PIprojects
  }
}

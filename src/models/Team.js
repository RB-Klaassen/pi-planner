export default class Team {
  constructor(options = {}) {
    this.id = new Date().getTime().toString(); // unique ID for this team
    this.name = options.name || "New Pi plan";
    this.po = options.po || ""; // Product Owner for this team, can commit request efforts
  }
}

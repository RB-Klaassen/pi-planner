export default class Project {
  constructor(options = {}) {
    this.id = new Date().getTime().toString(); // unique ID for this project
    this.projectId = options.projectId || ""; // the id for the project e.g. Jira ticket #
    this.name = options.name || "No name added"; // name for the project
    this.description = options.description || "No description added"; // extended description
    this.lead = options.lead || ""; // the person in the lead for delivery
    this.type = options.type || "KLO"; // KLO | LTO | MBF
    this.PIPlans = options.PIPlans || []; // array of PI sessions in which this project is included
    this.status = options.status || "New"; // New | In refinement | Ready | In progress | Done | On hold
    this.ticketLink = options.ticketLink || ""; // link to the external ticket system (e.g. Jira, Azure Boards)
    this.order = options.order || 0; // the priority / order of this project on the backlog
  }
}

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, currentSchool) {
    super(name, id, email);
    this.currentSchool = currentSchool;
  }

  getRole() {
    return "Intern";
  }

  getCurrentSchool() {
    return this.currentSchool;
  }
}
module.exports = Intern;

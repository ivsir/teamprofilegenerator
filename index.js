// bring Inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
// create a function that run inquirer prompt questions. then(() => inquirer.prompt()then) // chain promises

const managerQuestions = [
  {
    type: "input",
    message: "Who is your team manager?",
    name: "name",
  },
  {
    type: "input",
    message: "What is their ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is their email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is their office number?",
    name: "officeNumber",
  },
];

const employeeQuestions = [
  {
    type: "list",
    message: "What position would you like to add?",
    choices: ["Engineer", "Intern"],
    name: "role",
  },
  {
    type: "input",
    message: "What is their name?",
    name: "name",
  },

  {
    type: "input",
    message: "What is their ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is their email?",
    name: "email",
  },
];

const engineerQuestion = [
  {
    type: "input",
    message: "Please input their github username.",
    name: "username",
  },
];

const internQuestion = [
  {
    type: "input",
    message: "What school do they currently attend?",
    name: "currentSchool",
  },
];

const addMemberQuestion = [
  {
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add a new member.", "Finalize team."],
    name: "addMember",
  },
];

const staffData = [];


const managerInfo = () => {
  inquirer.prompt(managerQuestions).then((answers) => {
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    staffData.push(newManager);
    employeeInfo();
  });
};

managerInfo();



const employeeInfo = () => {
  inquirer.prompt(employeeQuestions).then((answers) => {
    if (answers.role == "Engineer") {
      inquirer.prompt(engineerQuestion).then((userAns) => {
        const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          userAns.username
        );
        staffData.push(newEngineer);
        addToTeam();
      });
      
    } else if (answers.role == "Intern") {
      inquirer.prompt(internQuestion).then((schoolAns) => {
        const newIntern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          schoolAns.currentSchool
        );
        staffData.push(newIntern);
        addToTeam();
      });
    }
  });
};

const addToTeam = () => {
  inquirer.prompt(addMemberQuestion).then((addMemberAns) => {
    if (addMemberAns.addMember === "Add a new member.") {
      return employeeInfo();
    }
    return createTeam();
  });
};

function createTeam() {
  console.log("Team finalized", staffData);
    fs.writeFileSync(
      "./dist/index.html",
      generateTeam(staffData),
      "utf-8"
    );
}

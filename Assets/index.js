// bring Inquirer
const inquirer = require("inquirer");
const fs = require("fs");
// const generateTeam = require("./src/page-template.js");

const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
// create a function that run inquirer prompt questions. then(() => inquirer.prompt()then) // chain promises
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },

  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    message: "What is your position?",
    choices: ["Engineer", "Intern", "Manager"],
    name: "role",
  },
];

const engineerQuestion = [
  {
    type: "input",
    message: "Please input your github username.",
    name: "username",
  },
];

const internQuestion = [
  {
    type: "input",
    message: "What school do you currently attend?",
    name: "currentSchool",
  },
];

const managerQuestion = [
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
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

const roleQuestions = () => {
  inquirer.prompt(questions).then((answers) => {
    // fs.writeFile("./index.html", template, () => {});

    if (answers.role == "Engineer") {
      inquirer.prompt(engineerQuestion).then((userAns) => {
        //   fs.appendFile("./index.html", template, () => {
        const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          userAns.username
        );
        staffData.push(newEngineer);
        addToTeam();
      });
      // });
      console.log(staffData);
    } else if (answers.role == "Intern") {
      inquirer.prompt(internQuestion).then((schoolAns) => {
        //   fs.appendFile("./index.html", template, () => {
        const newIntern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          schoolAns.currentSchool
        );
        staffData.push(newIntern);
        addToTeam();
      });
      // });
    } else if (answers.role == "Manager") {
      inquirer.prompt(managerQuestion).then((officeAns) => {
        //   fs.appendFile("./index.html", template, () => {
        const newManager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          officeAns.officeNumber
        );
        staffData.push(newManager);
        console.log(staffData);
        addToTeam();
      });
      // });
    }
  });
};

const addToTeam = () => {
  inquirer.prompt(addMemberQuestion).then((addMemberAns) => {
    if (addMemberAns.addMember === "Add a new member.") {
      console.log("member added");
      return roleQuestions();
    }
    return createTeam();
  });
};

roleQuestions();

function createTeam() {
  console.log("Team finalized", staffData);
  //   fs.writeFileSync(
  //     "./index.html",
  //     generateTeam(staffData),
  //     "utf-8"
  //   );
}

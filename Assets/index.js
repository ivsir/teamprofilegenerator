// bring Inquirer
const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/engineer");
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
    name: "role",
    choices: ["Engineer", "Intern", "Manager"],
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

const staffData = [];

// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
  const template = ``;

  fs.writeFile("./index.html", template, () => {
    console.log(answers);
  });
  if (answers.role == "Engineer") {
    inquirer.prompt(engineerQuestion).then((userAns) => {
      fs.appendFile("./index.html", template, () => {
        console.log(userAns);
      });
      return userAns.username;
    });
    const newEngineer = new Engineer[
      (answers.name, answers.id, answers.email, userAns.username)
    ];
    staffData.push(newEngineer);
    console.log(staffData);
  }

  if (answers.role == "Intern") {
    inquirer.prompt(internQuestion).then((schoolAns) => {
      fs.appendFile("./index.html", template, () => {
        console.log(schoolAns);
      });
    });
  }
  if (answers.role == "Manager") {
    inquirer.prompt(managerQuestion).then((officeAns) => {
      fs.appendFile("./index.html", template, () => {
        console.log(officeAns);
      });
    });
  }
});

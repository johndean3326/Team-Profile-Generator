const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const {clear} = require('console');

const team = [];
let completeTeam = false;


const init = async() => {
    await makeManager();
    while (!completeTeam) {

    const EQuestion = [
        {
            type: "list",
            name: "role",
            message: "Select employee role",
            choices: ["Engineer", "Intern", "None"],
        },
    ]


 const {role} = await inquirer.prompt(EQuestion);

if(role === "None") {
    completeTeam = true;

} else {

if (role === "Engineer") {
    await makeEngineer();
}
if(role === "Intern") {
    await makeIntern();
  }
 }
 console.log(team)
}

};

const makeManager = async() => {
    const managerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter manager name"
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager email"
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager ID"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office number"
        }
    ]

    const managerAnswers = await inquirer.prompt(managerQuestions);

    const manager = new Manager(managerAnswers);

    team.push(manager)
};


const makeEngineer = async() => {
    const engineerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter engineer name"
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer email"
        },
        {
            type: "input",
            name: "id",
            message: "Enter engineer ID"
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineer's github user name"
        }
    ]


    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(engineerAnswers)

    team.push(engineer)
};

const makeIntern = async() => {
    const internQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter intern name"
        },
        {
            type: "input",
            name: "email",
            message: "Enter intern email"
        },
        {
            type: "input",
            name: "id",
            message: "Enter intern ID"
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school's name"
        }
    ]

    const internAnswers = await inquirer.prompt(internQuestions);
    const intern = new Intern (internAnswers)

    team.push(intern)

};

init()

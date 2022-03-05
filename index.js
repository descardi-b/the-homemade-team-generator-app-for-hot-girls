const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerPage, internPage, engineerPage } = require('./templates/employee-templates');
const { upperMain, lowerMain } = require('./templates/main-template');
const { managerPrompt, engineerPrompt, internPrompt } = require('./inquirer-prompts');

// initialize the starter html template
const htmlTemp = [upperMain()];
const teamMembers = [];
let manager, engineer, intern;

// TODO: rename this function
function startTeam() {
    inquirer
        .prompt(managerPrompt)
        .then(function (managerAnswers) {
    
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamMembers.push(manager);
            teamPrompt();
        })
}

function teamPrompt() {
    inquirer
        .prompt([
            {
                type: 'checkbox',
                name: 'nextStep',
                message: `What would you like to do next?`,
                choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
            },
        ])
        .then(function (answer) {
            let nextStep = answer.nextStep.toString();
            console.log(nextStep);
            if (nextStep === 'Add Engineer') {
                addEngineer();
                return;
            }
            if (nextStep === 'Add Intern') {
                addIntern();
                return;
            } else {
                renderPage();
            }
        })
}

function addEngineer() {
    inquirer
        .prompt(engineerPrompt)
        .then(function (engineerAnswers) {
            engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGit)
            console.log(engineer);
            teamMembers.push(engineer);
            teamPrompt();
        }
        )
}

function addIntern() {
    inquirer
        .prompt(internPrompt)
        .then(function (internAnswers) {

            intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);
            console.log(intern);
            teamMembers.push(intern);
            teamPrompt();
        }
        )
}

function renderPage() {

    // manager render employee function

    for (let i = 0; i < teamMembers.length; i++) {
        let employee = teamMembers[i];
        renderEmployee(employee);
    }

    // append the lower half to the template array
    htmlTemp.push(lowerMain());
    // concatenate the array as a string
    let mainPage = htmlTemp.join('\n');
    fs.writeFile('./public/main.html', mainPage, 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(`Your coding team has been written to the main.html file!`);
    })
}

// renderEmployee function called above

function renderEmployee(employee) {
    if (employee.getRole() === "Intern") {
        htmlTemp.push(internPage(employee));
    } else if (employee.getRole() === "Engineer") {
        htmlTemp.push(engineerPage(employee));
    }
    else {
        htmlTemp.push(managerPage(employee));
    }
}

startTeam();
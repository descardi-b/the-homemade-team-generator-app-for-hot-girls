const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];
let manager;
let engineer;
let intern;

// create object after .then in promise

function managerData() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'managerName',
            message: `What is your manager's name?`,
        },
        {
            type: 'input',
            name: 'managerId',
            message: `What is your manager's ID?`,
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: `What is your manager's email address?`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is your manager's office number?`,
        },
        ])
        .then(function (managerAnswers) {
    
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.officeNumber);
            console.log(manager);
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
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: `What is your engineer's name?`,
            },
            {
                type: 'input',
                name: 'engineerId',
                message: `What is your engineer's ID?`,
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: `What is your engineer's email address?`,
            },
            {
                type: 'input',
                name: 'engineerGit',
                message: `What is your engineer's GitHub address?`,
            },
        ])
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
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: `What is your intern's name?`,
            },
            {
                type: 'input',
                name: 'internId',
                message: `What is your intern's ID?`,
            },
            {
                type: 'input',
                name: 'internEmail',
                message: `What is your intern's email address?`,
            },
            {
                type: 'input',
                name: 'internSchool',
                message: `What school does your intern go to?`,
            },
        ])
        .then(function (internAnswers) {

            intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);
            console.log(intern);
            teamMembers.push(intern);
            teamPrompt();
        }
        )
}

function renderPage() {

    // Loop through the employees to print out all cards
    fs.readFile('./templates/main.html', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(`here is the ${manager.getName()}`);
        // console.log(data);
        let result = data.replace('{{managerName}}', manager.getName());
        result = result.replace('{{managerId}}', manager.getId());
        result = result.replace('{{managerEmail}}', manager.getEmail());
        result = result.replace('{{officeNumber}}', manager.getOfficeNumber());
        fs.writeFile('./templates/main.html', result, 'utf8', function(err) {
            if (err) {
                return console.log(err);
            }
        });
    });


    //=====================================================
    // Append all of the team members after manager
    //=====================================================

    for (let i = 0; i < teamMembers.length; i++) {
        let employee = teamMembers[i];
        renderEmployee(employee);
    }


    // Console.log that the html has been generated
    console.log("The codingteam.html has been successfully generated!");
}

// renderEmployee function called above

function renderEmployee(employee) {
    if (employee.getRole() === "Intern") {
        fs.writeFile('./templates/main.html', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(`here is the ${intern.getName()}`);
            // console.log(data);
            let internData = data.replace('{{internName}}', intern.getName());
            internData = internData.replace('{{internId}}', intern.getId());
            internData = internData.replace('{{internEmail}}', intern.getEmail());
            internData = internData.replace('{{school}}', intern.getSchool());
            fs.appendFile('./templates/main.html', internData, 'utf8', function(err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    } else if (employee.getRole() === "Engineer") {

        fs.readFile('./templates/main.html', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(`here is the ${engineer.getName()}`);
            // console.log(data);
            let engineerData = data.replace('{{engineerName}}', engineer.getName());
            engineerData = engineerData.replace('{{engineerId}}', engineer.getId());
            engineerData = engineerData.replace('{{engineerEmail}}', engineer.getEmail());
            engineerData = engineerData.replace('{{github}}', engineer.getGithub());
            fs.writeFile('./templates/main.html', engineerData, 'utf8', function(err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    }
}

managerData();
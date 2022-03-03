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
    let managerCard = fs.readFile('./templates/manager.html', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(`here is the ${manager.getName()}`);
        // console.log(data);
        let result = data.replace('{{name}}', manager.getName());
        result = result.replace('{{id}}', manager.getId());
        result = result.replace('{{email}}', manager.getEmail());
        result = result.replace('{{officeNumber}}', manager.getOfficeNumber());
        fs.writeFile('./templates/manager.html', result, 'utf8', function(err) {
            if (err) {
                return console.log(err);
            }
        });
    });


    //=====================================================
    // Append all of the team members after manager
    //=====================================================

    let cards = [managerCard]; // Initial cards only has the Manager card info.

    for (let i = 0; i < teamMembers.length; i++) {
        let employee = teamMembers[i];
        // Cards adds and then equals every new employee card info.
        let employeeArr = renderEmployee(employee);
        cards.push(employeeArr);
        console.log(cards);
    }

    console.log(cards);

    // let main = fs.readFile('./templates/main.html', 'utf8', function (err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //      // Adds cards to main.html and outputs to team.html.
    //     let result = data.replace('{{cards}}', cards)
    //     fs.writeFile('./templates/main.html', result, function (err) {
    //         if (err) {
    //             return err;
    //         }
    //     });
    // });

    // Console.log that the html has been generated
    console.log("The codingteam.html has been successfully generated!");
}

// renderEmployee function called above

function renderEmployee(employee) {
    if (employee.getRole() === "Intern") {
        fs.readFile('./templates/intern.html', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(`here is the ${intern.getName()}`);
            // console.log(data);
            var result = data.replace('{{name}}', intern.getName());
            result = result.replace('{{id}}', intern.getId());
            result = result.replace('{{email}}', intern.getEmail());
            result = result.replace('{{school}}', intern.getSchool());
            fs.writeFile('./templates/intern.html', result, 'utf8', function(err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    } else if (employee.getRole() === "Engineer") {

        fs.readFile('./templates/engineer.html', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(`here is the ${engineer.getName()}`);
            // console.log(data);
            var result = data.replace('{{name}}', engineer.getName());
            result = result.replace('{{id}}', engineer.getId());
            result = result.replace('{{email}}', engineer.getEmail());
            result = result.replace('{{github}}', engineer.getGithub());
            fs.writeFile('./templates/engineer.html', result, 'utf8', function(err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    }
}

managerData();
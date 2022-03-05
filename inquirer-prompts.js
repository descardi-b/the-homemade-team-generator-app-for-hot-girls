const managerPrompt = [
    {
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
];

const engineerPrompt = [
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
];

const internPrompt = [
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
];

module.exports = { 
    managerPrompt,
    engineerPrompt,
    internPrompt
}
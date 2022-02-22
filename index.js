const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const htmlgenerator = require('./lib/htmlgenerator')
const Team = [];



function mainMenu() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'selector',
            message: "What kind of employee are you adding",
            choices: ['Manager', 'Engineer', 'Intern']
        }]).then(({selector}) => {
            if(selector === "Manager") {
                newManager()
            } else if (selector === "Engineer") {
                newEngineer()
            } else if (selector === "Intern") {
                newIntern()
            }
        })
    }

function addMore () {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Yes', 'No'],
            name: 'choice',
            message: 'Would you like to add more employees?',
        }]).then(({choice}) => {
            if(choice === "Yes") {
                mainMenu()
            } else {
                createNewFile()
                    }
            }
        )
    
}

const newManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?"
        },
    ]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        Team.push(manager);
        console.log(Team)
        // console.log(genreateHTML(Team))
        addMore();
    })
}

const newEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is ypur engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's GitHub?"
        }
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        Team.push(engineer);
        addMore();
    })
}

const newIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is ypur intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school?"
        }
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        Team.push(intern);
        addMore();
    })
}

mainMenu()

function createNewFile() {
    const htmlPage = htmlgenerator(Team);

    fs.writeFile('index.html', htmlPage, (err) =>
    err ? console.log(err) : console.log('HTML Page Generated!')
    );
}
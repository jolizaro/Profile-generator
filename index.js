const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
let teamArray = []

function askManagerQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers ID ?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers Email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the managers office number?'
        },
    ])
    .then (function(res){
        const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOfficeNumber)
        teamArray.push(manager)
        options()
    })
}
function options(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'What would you like to do next?',
            choices: ['add intern', 'add engineer', 'generate team']
        },
        
        
    ])
    .then (function(res){
        if (res.userChoice === 'add intern'){
            addIntern()
          }
          else if (res.userChoice === 'add engineer'){
              addEngineer()
          }
          else {
              generateTeam()
          }
        
    })

}
function askManagerQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers ID ?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers Email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the managers office number?'
        },
    ])
    .then (function(res){
        const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOfficeNumber)
        teamArray.push(manager)
        options()
    })
}
askManagerQuestion()

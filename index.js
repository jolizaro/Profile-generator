const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateTeam = require('./lib/generateTeam')
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
            choices: ['add manager', 'add intern', 'add engineer', 'generate team']
        },
        
        
    ])
    .then (function(res){
        if (res.userChoice === 'add intern'){
            addIntern()
          }
          else if (res.userChoice === 'add engineer'){
              addEngineer()
          }
          else if (res.userChoice === 'add manager'){
            addManager()
          }
          else {
              console.log(generateTeam(teamArray))
          }
        
    })

}
function addManager() {
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
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns ID ?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns Email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the interns school?'
        },
    ])
    .then (function(res){
        const intern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool)
        teamArray.push(intern)
        options()
        
    })
}
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'EngineerName',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'EngineerId',
            message: 'What is the Engineers ID ?'
        },
        {
            type: 'input',
            name: 'EngineerEmail',
            message: 'What is the Engineers Email?'
        },
        {
            type: 'input',
            name: 'EngineerGithub',
            message: 'What is the Engineers Github?'
        },
    ])
    .then (function(res){
        const engineer = new Engineer(res.EngineerName, res.EngineerId, res.EngineerEmail, res.EngineerGithub)
        teamArray.push(engineer)
        options()
        
    })
}
options()

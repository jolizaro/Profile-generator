const Employee = require('./Employee')
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
      }
      getHtml (){
        return `<div><p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.github}</p></div>`
        
    }
}
module.exports = Engineer
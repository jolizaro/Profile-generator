const Employee = require('./Employee')
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
      }
      getHtml (){
        return `<div><p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.school}</p></div>`
        
    }
    
}
module.exports = Intern
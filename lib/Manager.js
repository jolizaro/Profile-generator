const Employee = require('./Employee')
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
      }
      getHtml (){
        return `<div><p>${this.name}</p>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.officeNumber}</p></div>`
    }
}

module.exports = Manager
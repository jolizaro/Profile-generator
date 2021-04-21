class Employee{
    constructor(name,id,email){
        this.name = name
        this.id = id
        this.email = email

    }
    
}
const Joliza = new Employee('Joliza', '351', 'Jo@jo@gmail.com')
console.log(Joliza)
module.exports = Employee
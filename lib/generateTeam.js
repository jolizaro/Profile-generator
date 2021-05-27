    const generateEmployees = (array)=> {
    let empString = ""
    array.forEach((employee)=> {
        empString += employee.getHtml
    })
    return empString
}
const generateTeam = (array)=> {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>profile Generator</title>
      
    </head>
    
    <body>
    
      <div class="container">
        <div style="margin-top: 80px;" class="jumbotron text-center">
          <h1 class="display-4">Profile Generator </h1>
       
         
        </div>
        <section>
                       
            ${generateEmployees(array)}
    
        </section>
      </div>
      
    </body>
    
    </html>
    `
   
}
module.exports = generateTeam
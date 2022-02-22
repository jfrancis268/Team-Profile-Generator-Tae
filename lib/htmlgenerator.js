const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')

function genreateHTML(response) {
    let template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./Assets/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1 id="header">My Team</h1>
        </header>
    
        <main>
            <div class="container">
              ${generateManagerCards(response)}
              ${generateEngineerCards(response)}
              ${generateInternCards(response)}
            </div>
    
        </main>
    
    
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>    
        <script src="./script.js"></script>
    </body>
    </html>`

        return template
};

function generateManagerCards (arr) {
    let managerCards = ``
    console.log(arr)
    for(i=0; i< arr.length; i++) {
      if(arr[i].getRole() == "Manager") {
        managerCards += `
        <div class="team" col-4 mb-3 style="width: 18rem;">
        <div class="card-header">
          <h4 class="card-title" id="manager name">${arr[i].name}</h4>
          <p class="card-text" id="manager title">Manager</p>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Employee ID: ${arr[i].id}</li>
          <li class="list-group-item"> Email: ${arr[i].email}</li>
          <li class="list-group-item"> Office Number: ${arr[i].officeNumber}</li>
        </ul>
        </div>
        </div>
        `
      }
    }
    return managerCards
  }
  
  function generateEngineerCards (arr) {
    let engineerCards = ``
    console.log(arr)
    for(i=0; i< arr.length; i++) {
      if(arr[i].getRole() == "Engineer") {
        engineerCards += `
        <div class="team" col-4 mb-3 style="width: 18rem;">
        <div class="card-header">
          <h4 class="card-title">${arr[i].name}</h4>
          <p class="card-text">Engineer</p>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Employee ID: ${arr[i].id}</li>
          <li class="list-group-item"> Email: ${arr[i].email}</li>
          <li class="list-group-item"> GitHub: ${arr[i].github}</li>
        </ul>
        </div>
        </div>
        `
      }
    }
    return engineerCards
  }
  
  function generateInternCards (arr) {
    let internCards = ``
    console.log(arr)
    for(i=0; i< arr.length; i++) {
      if(arr[i].getRole() == "Intern") {
        internCards += `
        <div class="team" col-4 mb-3 style="width: 18rem;">
        <div class="card-header">
          <h4 class="card-title" id="name">${arr[i].name}</h4>
          <p class="card-text">Intern</p>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Employee ID: ${arr[i].id}</li>
          <li class="list-group-item"> Email: ${arr[i].email}</li>
          <li class="list-group-item"> School: ${arr[i].school}</li>
        </ul>
        </div>
        </div>
        `
      }
    } 
    return internCards
  }
  
  module.exports = genreateHTML;
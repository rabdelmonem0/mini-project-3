const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location'
            
        },
        {
            type: 'input',
            message: 'Write a little about yourself?',
            name: 'bio'
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin'
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github'
        },
    ])
    .then((respones) => {
        const answers = respones;

        const { username, location, bio, linkedin, github} = answers;
    
        data = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Professional Portfolio</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> 
        </head>
        <body>
        <div class="jumbotron">
        <h1 class="display-4">Hello, my name is ${username}</h1>
        <p class="lead">I live in ${location}</p>
        <p>${bio}</p>
        <a class="btn btn-primary btn-lg" href="${linkedin}" role="button">LinkedIn</a>
        <a class="btn btn-primary btn-lg" href="${github}" role="button">GitHub</a>
        </div>
        </body>
        </html>
        `
        fs.writeFile('index.html',data,(err) => {
            if(err){ throw err}
        })
        console.log(respones)
    })

  
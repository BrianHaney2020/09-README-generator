// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const myMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
    type:'input',
    message: 'What is your Github UserName?',
    name: 'github'
    },
    {
        type:'input',
        message: 'What is your email address?',
        name: 'email'
        },
    {
    type:'input',
    message:'What is the title of your project?',
    name: 'title'
    },
    {
    type: 'input',
    message: 'Please provide a short description of your project',
    name: "description"
    }]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err)=>
    err ? console.error(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
const init = function () {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('README.md',response));
}

// Function call to initialize app
init();





function createText(myObject) {
    let myText = `My name is ${myObject.title}. My quest is ${myObject.description}.`;
    return myText;
};



// console.log(generateMarkdown.test);


const fs = require('fs');
const inquirer = require('inquirer');
/* const dummyResponse = {
    username:"brian",
    quest: "to seek the holy grail"
} */

function createText(myObject) {
    let myText = `My name is ${myObject.username}. My quest is ${myObject.quest}.`;
    return myText;
};

function writeText(userResponses){
    fs.writeFile('README.md', createText(userResponses), (err)=>
    err ? console.error(err) : console.log("Success!"));
}

 
// console.log(createText(dummyResponse));

inquirer
    .prompt([
        {
            type:'input',
            message:'What is your name?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'what is your quest',
            name: "quest"
        }
    ])
    .then((response) => writeText(response)
    );

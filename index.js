// importing node packages and the generateLogo JavaScript file
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/generateLogo");

// Confirms the user inputs the correct amount of characters
const confirmLength = async (input) => {
    if (input.length > 3 || input.length < 1) {
        console.log(" ** Please enter a valid amount of characters! **");
    } else {
        return true;
    }
}

// Array of questions after a user begins the program
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to (3) characters:',
        validate: confirmLength,
    
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a color for your text:',  
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose the shape for your logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please choose a color for your shape:',  
    }
]) .then(response => writeToFile(response));

// Writes the logo.svg file using the generateLogo function as well as catches any errors throughout the program
function writeToFile(response) {
    fs.writeFile("logo.svg", generateLogo(response), (err) => err ? console.log(err) : console.log("Generated logo.svg!"));
}
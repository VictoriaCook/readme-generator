// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project",
      },
      {
        type: "input",
        name: "description",
        message: "Please enter the description of your project",
      },
      {
        type: "input",
        name: "contents",
        message: "Please enter the table of contents for this readme file",
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter the instructions for your project installation",
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter your project usage information",
      },
      {
        type: "list",
        name: "licence",
        choices: ["MIT", "Apache", "tbc"],
      },
      {
        type: "input",
        name: "contribution",
        message: "Please enter the contribution requirements for your project",
      },
      {
        type: "input",
        name: "tests",
        message: "Please enter your project testing instructions",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Successfully created README.md file')
    );
}

// TODO: Create a function to initialize app
function init() {
    const prompt = inquirer.createPromptModule();
    prompt(questions)
    .then((answers) => {
        const mdPageContent = generateMd(answers);
        writeToFile('./output/README.md', mdPageContent);
    });
}

// Function to generate md file
const generateMd = (mdData) => {
let { title, description, contents, installation, usage, licence, contribution, tests, github, email } = mdData;

let content = 
`# ${title}

## Description

${description}

## Table of Contents

${contents}

## Installation

${installation}

`;
return content
}

// Function call to initialize app
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
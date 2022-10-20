// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'List your table of contents:',
        name: 'tableofcontents',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the instructions for usage?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license does your project use?',
        choices: ['MIT', 'Apache', 'Boost', 'BSD', 'BSD 2-Clause License', 'Eclipse', 'GNU', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM', 'ISC', 'Mozilla', 'Open Data Commons', 'Open Database License (0DbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Are there any contributors you would like to include?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'How do you test the code?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Common questions:',
        name: 'questions',
    },
]

// TODO: Create a function to write README file
function writeToFile(data) {
    const content = generateMarkdown(data)
    fs.writeFile('README.md', content, (err) =>
        err ? console.error(err) : console.log('Success'))
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
       });     
 }

// Function call to initialize app
init();

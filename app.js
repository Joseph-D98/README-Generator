const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
// Acticity 9.14
inquirer.prompt([{
        type: "input",
        message: "What is your user GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please a table of contents for your project.",
        name: "table of contents"
    },
    {
        type: "input",
        message: "Please provide the steps required to install your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide an example of how your project can be used.",
        name: "usage"
    },
    {
        type: "input",
        message: "What kind of license would you like to have?",
        name: "license"
    },
    {
        type: "input",
        message: "Including yourself, please list out all contributors",
        name: "contributing"
    },
    {
        type: "input",
        message: "Have you tested your project",
        name: "tests"
    }
]).then(function (data) {
    fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
});
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

/* array of questions for user
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Despcription of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "How does one use this app?"
    },
    {
        type: "input",
        name: "guidelines",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "testing",
        message: "What are the test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license is the application covered under?",
        choices: ["x", "y", "z"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];
*/
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Despcription of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "How does one use this app?"
        },
        {
            type: "input",
            name: "guidelines",
            message: "What are the contribution guidelines?"
        },
        {
            type: "input",
            name: "testing",
            message: "What are the test instructions?"
        },
        {
            type: "list",
            name: "license",
            message: "Which license is the application covered under?",
            choices: ["x", "y", "z"]
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
    ])
    .then(function (data) {
        var file = data.title.toLowerCase().split("").join("") + ".json";

        fs.writeFile(file, JSON.stringify(data, null, "\t"), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("data stored successfully!");
        }
    );
});


/*
questions.forEach(response => {
    inquirer.prompt(questions)
        .then(answers => {
            const response = answers
        })
        .catch(error => {
            if (error)
                return "Try Again!"
        })
});
*/

/*

// function to write README file
let input = {
    x,
    y,
    ...process.argv
}

//function writeToFile(filename, data) {
fs.writeFile("readme.md", input, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("Data Saved!")
})


// function to initialize program
function init() {

}

// function call to initialize program
init();

*/
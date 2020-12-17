//Bringing in necessary packages & files
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

//Inquirer sequence -- prompts & saves input as an object
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Despcription of your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
      },
      {
        type: "input",
        name: "usage",
        message: "How does one use this app?",
      },
      {
        type: "input",
        name: "guidelines",
        message: "What are the contribution guidelines?",
      },
      {
        type: "input",
        name: "testing",
        message: "What are the test instructions?",
      },
      {
        type: "list",
        name: "license",
        message: "Which license is the application covered under?",
        choices: ["x", "y", "z"],
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ])
    .then(function (data) {
      const product = generateMarkdown(data);

      return writeFileAsync("readme.md", product);
    })
    .then(function () {
      console.log("successfully wrote to readme.md");
    })
    .catch(function (err) {
      console.log(err);
    });
}

promptUser();

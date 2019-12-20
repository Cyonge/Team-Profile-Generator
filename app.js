// first thing to run
const inquirer = require("inquirer");
const jest = require("jest");
const Engineer = require("./lib/engineer.js");

// will need to have separate inquirer prompts depending on role etc. 


var engineer = new Engineer("christian", "developer", "1", "githubUsername");
console.log(engineer.getName());

// will have a function for each employee type ex: renderIntern(),renderManager()
// then you would add them all together and create a single HTML file under the output folder

//Constructor classes are "models"
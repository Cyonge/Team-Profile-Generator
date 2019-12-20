// first thing to run
const inquirer = require("inquirer");
const jest = require("jest");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

// will need to have separate inquirer prompts depending on role etc. 


var engineer = new Engineer("christian", "engineer@email.com", "developer", "githubUsername");
console.log(engineer.getName());

var intern = new Intern("Daniel", "intern@email.com,", "intern", "Harvard");
console.log(intern);

var manager = new Manager("Osei", "manager@email.com,", "manager", "123");
console.log(manager.getEmail());



// will have a function for each employee type ex: renderIntern(),renderManager()
// then you would add them all together and create a single HTML file under the output folder

//Constructor classes are "models"
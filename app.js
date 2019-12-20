// first thing to run
const inquirer = require("inquirer");
const jest = require("jest");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

// will need to have separate inquirer prompts depending on role etc. 


class Employee{
    
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;

    }
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getRole(){
        return "Employee";
    };
    getEmail(){
        return this.email;
    }






promptUser(answers) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what is your role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(function (res) {
        console.log(res)
        if (res.role === "Engineer") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "github",
                    type: "input",
                    message: "What is your github Username?"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                }
            ]);

        } else if (res.role === "Intern") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "school",
                    type: "input",
                    message: "Where did you graduate from college?"
                }
            ]);
        } else if (res.role === "Manager") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "office",
                    type: "input",
                    message: "What is your office number?"
                }
            ]);
        };

    })
    .catch(function (err) {
        console.log(err);
    });


};

}


module.exports = Employee;

var newEmployee = new Employee();

newEmployee.promptUser();



// var engineer = new Engineer("christian", "engineer@email.com", "developer", "githubUsername");
// console.log(engineer.getName());

// var intern = new Intern("Daniel", "intern@email.com,", "intern", "Harvard");
// console.log(intern);

// var manager = new Manager("Osei", "manager@email.com,", "manager", "123");
// console.log(manager.getEmail());



// will have a function for each employee type ex: renderIntern(),renderManager()
// then you would add them all together and create a single HTML file under the output folder

//Constructor classes are "models"
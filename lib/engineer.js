const Employee = require("./employee.js");

class Engineer extends Employee{
    constructor(name, email, id, githubUsername){
        super(name, email, id);
        this.github = githubUsername;
    }
}

module.exports = Engineer; 
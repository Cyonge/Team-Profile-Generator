// this will be where I set up shared properties
// engineer, manager and intern will all have shared things in this file
// remember to export classes (constructor function files)
// export each individual class to the app.js
// this is also where I will store common functions that apply to call classes

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

}

module.exports = Employee;

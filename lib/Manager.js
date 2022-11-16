const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {

    }

    getRole(); // <-- will Return "Manger"
}

module.exports = Manager;
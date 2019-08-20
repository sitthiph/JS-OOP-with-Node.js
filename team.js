const Programmer = require("./programmer");

class Team {
    constructor() {
        this.project = undefined;
        this.member = [];
    }

    addProgrammer(name, job, age, lang) {
        this.member.push(new Programmer.Programmer(name, job, age, lang));
    }

    length() {
        return this.member.length;
    }
}

module.exports = {
    Team : Team
};
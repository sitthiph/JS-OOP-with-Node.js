class Programmer {
    constructor(name, job, age, lang) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.lang = lang;
    }
    toString() {
        return `Name: ${this.name} Job: ${this.job} Age: ${this.age} Lang: ${this.lang}`
    }

}

module.exports = {
    Programmer: Programmer
};
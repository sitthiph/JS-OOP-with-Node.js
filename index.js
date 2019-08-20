const team = require("./team.js");
const fs = require("fs");
const lineReader = require("readline").createInterface({
    input: fs.createReadStream("member.txt")
});

let teamObj = new team.Team();

lineReader
    .on('line', function (line) {
        const programmer = line.split(",");
        teamObj.addProgrammer(programmer[0], programmer[1], programmer[2], programmer[3])
    })
    .on('close', callback);

function callback() {
    for(let i = 0; i < teamObj.length(); i++)
        console.log(teamObj.member[i].toString());
    console.log(`There are ${teamObj.length()} team members.`);
}

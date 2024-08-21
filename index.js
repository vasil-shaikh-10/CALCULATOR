const fs = require('fs');
const { multi, modul,sub,sum,div } = require('./sum');
const prompt = require('prompt-sync')();

console.log("select options:sum,sub,multi,div,module");

let type=prompt("enter your opertation");

switch (type) {
    case "sum":
        a=prompt("enter a:");
        b=prompt("enter b:");
        console.log("result:",sum(a,b));
        break;
    case "sub":
        a=prompt("enter a:");
        b=prompt("enter b:");
        console.log("result:",sub(a,b));
        break;
    case "multi":
        a=prompt("enter a:");
        b=prompt("enter b:");
        console.log("result:",multi(a,b));
        break;
    case "div":
        a=prompt("enter a:");
        b=prompt("enter b:");
        console.log("result:",div(a,b));
        break;
    case "module":
        a=prompt("enter a:");
        b=prompt("enter b:");
        console.log("result:",modul(a,b));
}


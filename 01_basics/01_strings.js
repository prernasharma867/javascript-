const name = "raj"
const repoCount = 50;
//console.log(name +" "+ repoCount+" "+"value");
// do not use this syntax
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new  String('yellow')
//string is an object in js
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'))
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-6,3)
console.log(anotherString);
//in slice function we can use only negative value not in subString
const newStringOne = "     hitesh   ";
console.log(newStringOne.trim());
// trim removes the extra spaces
const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', ' '))
console.log(url.includes('sundar'));
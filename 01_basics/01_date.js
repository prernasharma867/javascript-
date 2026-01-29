let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());//this one is good
console.log(myDate.toISOString());//this
console.log(myDate.toJSON());//this both give the same output
console.log(myDate.toLocaleDateString()); // this is also good
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,5,6);
// month start from zero in javascript
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
//format of YY-DD-MM
let createdDate = new Date("2023-01-14");
console.log(createdDate.toDateString());
//MM-DD-YY
let mostUsedDate = new Date("04-23-2045");
console.log(mostUsedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
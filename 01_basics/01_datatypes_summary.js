// primitive 
/* 7 primitive datatypes they all are call by value
string , number, boolean , null, undefined, symbol, bigint */
/* reference type (non primitive)
array, objects,functions */
/* javascript is a dynamically typed language*/
const score = 100;
const scorevalue = 100.;
const isloggedin = false;
const outsideTemp = null;
let useremail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid);
const bigNumber =  3454566778832n;
const heroes = ["shaktiman", "naagaraj", "doga"];
 let obj ={
    name :"hitesh",
    age :22,
}
const myFunction = function(){
    console.log("hellowrold");
}
console.log(typeof bigNumber);//important
console.log(typeof myFunction);

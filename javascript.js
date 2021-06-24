// Simple printing on console
console.log("hello");

//Initializing an array
var arr = [];
arr.push(5);
console.log(arr[0]);

// A string
var str = "Hello";
console.log(str);

//We are going to learn variables today 
var name; // var names should be descriptive and also valid 

// Validity of variables names 
// 1. can consist of letter digits underscores and dollar sign
// 2.  cannot start with a digit 
// 3. names are case sensitive
// 4. names should be mnemonic

name = "hello i am a variable";
console.log(name);

var age = 56 ;

// Data types in Javascript
// a variable in js can be anyything string,number,events anything
// even a variable can change its type in between

var radius = 5;
var area = 2*radius*radius;
console.log(area);

// Function declaration
function sum(data1, data2){
    console.log("sum is");
    console.log(data1+data2);
}

var x=80,y=90;
sum(x,y); // Calling the function
var x=8,y=90;
sum(x,y); // Calling the function

// Array 
var arr = [5,2,"kereio"];
console.log(typeof(arr[2]),arr[1]);
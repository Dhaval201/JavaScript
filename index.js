//Value and Variables

// -- We should write variable name using underscore or lettercls
// -- Variable is case censitive
// -- User should not be use reserve word as a variable name
// -- First letter should not be number in variable
// -- We can not use a special character as a variable name

// var myName = "Dhaval Shah";
// var myAge = "29";
// console.log(myName);

//

// Data types in javascript

// -- We have six kind of data types in javascript as below mentioned

//String

// var myAbc = "Anita";
// console.log(myAbc);
// console.log(typeof myAbc);

//Boolean

// var myTruth = true;
// console.log(typeof myTruth);
//undefine

// var iAmDhaval = true;
// console.log(iAmDhaval);
// console.log(typeof myNo);

//number
// var myAgeis = 26;
// console.log(myAgeis);
// console.log(typeof myAgeis);

// var myNumber = 15;
// console.log(typeof myNumber);

//BigInt

// Practice of Data types

// console.log(10 + "20");
// console.log(9 - "5");
// console.log("Java" + "Script");
// console.log("Java " + "Script");
// console.log("Java" - "Script");
// console.log(true + true);
// console.log(false - true);

// Defference between null and undefine

// Undefine called which variable value is not assigned
//Null called which variable valuue is assign a null.

// var myValue = null;
// console.log(myValue);

// var newValue;
// console.log(newValue);
// console.log(typeof newValue);

//What is NaN?

//NaN is the property of global object.
//NaN is the variable in global scope.
//The initial Value of NaN is Not-A-Number.

// var myPhoneNumber = 9033890337;
// var myName = "Dhaval Shah";

// console.log(myPhoneNumber);
// console.log(myName);

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if (isNaN(myName)) {
//   console.log("Please enter valid phone no");
// }

// console.log(NaN === NaN);

// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

//Expression and operator

// console.log(5 + 20);
//here  5 is operand and + is operator and 20 is also operand
//expressions is a combination of operand and operator

//Types of operator

//Assignment operator

// (=) is a assignment value
// var x = 10;
// var y = 10;
//console.log("is and x and y both are equals or not" + x === y);
// console.log(`is and x and y both are equals or not : ${x === y}`);

//Arithmetic operator

// Airithmetic operator take numrical value like ("+","-","*","/")
// Increment and Decrement operator
// Operator: X++ or ++X or X-- or --X
// X++ is called postfix increment operator

// var num = 10;
// var newNum = num++;

// console.log(num);
// console.log(newNum);

// ++X is called prefix increment operator

// var num = 10;
// var newNum = ++num;

// console.log(num);
// console.log(newNum);

//if used postfix after operand

//Comparision operator

//Logical operator
//String operator
//Conditional operator

//Modulus operator

// "%" is one kind of modulus operator

// var a = 10;
// var b = 15;

// //Comparison operator

// console.log(a > b);
// console.log(a == b);
// console.log(a != b);

// Logical operatory

//if all operand output come true then only logical operator get result in "true" otherwise output is false
// Logical AND(&&)

// console.log(a < b && 30 < 0);

// //LOgical OR(||) operator
// // anyoff one operand value is come true then results come as true
// console.log(a < b || 30 < 0);

// //Logical NOT(!) operator

// console.log(!(a < b || 15 < 20));

// //Exponentiation operator(**)

// console.log(a * a);

//How to swap two variable value

// var a = 5;
// var b = 15;

//output b=5 and a=15

// var c = b; //c = 15
// var b = a; // b = 5
// var a = c; //a = 15

// console.log("Variable a output is " + a, "Variable b ouput is " + b);

//Control statement and loops

//if..else statement
//switch statement
//while loop
//do while loop
//for loop
//for in loop
//for of loop
//conditional operator

//if...else statement

// var year = 2100;
// debugger;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log("The year " + year + " is leap year");
//     } else {
//       console.log("The year " + year + " is not leap year");
//     }
//   } else {
//     console.log("The year " + year + " is leap year");
//   }
// } else {
//   console.log("The year " + year + " is not a leap year");
// }

//What is the falsy value in javascript?

//we have total 5 types of falsy value

//0
//"" (empty string)
//undefine
//null
//NaN
//false

//example

// if ((score = undefined)) {
//   console.log("Yes we loose the game");
// } else {
//   console.log("We won the game");
// }

//Conditional(ternary) operator

//The conditional(ternary) operator is the only operator of javascript
//that take three operands

// var age = 17;

// console.log(age >= 18 ? "You can vote" : "You are not eligible to vote");

//Switch statement
//Evaluates an expression, matching the expression's value to a
//case clause, and executes statements associated with that case

//1st without break statement
//Find the area of circle, triangle, rectangle?

//below example with if...else statement

// var area = "circle";

// var PI = 3.142,
//   l = 5,
//   b = 4,
//   r = 3;

// if (area == "circle") {
//   console.log("area of circle is " + PI * r ** 2);
// } else if (area == "triangle") {
//   console.log("area of triangle is " + (l * b) / 2);
// } else if (area == "rectangle") {
//   console.log("area of rectangle is " + l * b);
// } else {
//   console.log("Please enter a valid data");
// }

//example with switch stateement

// var area = "rectangle";

// var PI = 3.142,
//   l = 5,
//   b = 4,
//   r = 3;

// switch (area) {
//   case "circle":
//     console.log("area of circle is " + PI * r ** 2);
//     break;
//   case "triangle":
//     console.log("area of triangle is " + (l * b) / 2);
//     break;
//   case "rectangle":
//     console.log("area of rectangle is " + l * b);
//     break;

//   default:
//     console.log("Please enter a valid data");
// }

// While loop statement
// The while statement create a loop that executes a specified statement
// As long as the test condition evaluates to true

// var num = 0;

// while (num < 20) {
//   num++;
//   console.log(num);
// }

// Do While loop
// Do While loop executes statement first and after check condition

// var num = 1;
// debugger;
// do {
//   console.log(num);
//   num++;
// } while (num <= 5);

//For Loop

// for (initializer; condition; iteration) {
//     //code to be executed
// }

// for (var num = 0; num <= 10; num++) {
//   debugger;
//   console.log(num);
// }

// for (var num = 8; num * 1; num++) {
//   console.log(num);
//   num++;
//   break;
// }

// for (var num = 1; num <= 10; num++) {
//   var tableOf = 8;
//   console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

//Functions in javascript

//What we will see

// A Javascript function is a block of code designed to perform a perticular task.

//Function Definition

//-- Before we use to function, we need to define it.
//The name of the function
//A list of parameters to the function, enclosed in parentheses and separated by commas.
// JavaScript statements that define the function, enclosed in curly brackets, {...}.

//Syntex of function

// function functioName() {
//statement
//}

// function sum() {
//   var a = 10;
//   var b = 2;
//   var total = a + b;
//   console.log(total);
// }

//Calling a Function

//Defining a function does not execute it.
//A javaScript function is executed when "something" invokes it

// function sum(a, b) {
//   var total = a + b;
//   console.log(total);
// }

// sum(20, 4);

//Function Parameters

// here a and b is function paramters
// function sum(a, b) {
//   var total = a + b;
//   console.log(total);
//}

//Function Arguments

//sum(20, 4);

//What is the difference between function parameters and function arguments

//Why functions?

//You can resuse code : Define the code once, use it many times.
//You can use the same code many times with different arguments
//to Reproduce different results.

// A function is group of the reusable code which can be called anywhere into the program.
// This eliminates the need of writing the same code again and again

//Function Expression

//Function expression simply means create a function and put it into the variable.

// function sum(a, b) {
//   var total = a + b;
//   console.log(total);
// }

// var funcExp = sum(20, 3);

// funcExp;

//Return Keyword

//When JavaScript reaches the return statement the function will stop executing
//Function often compute a return value.
//The return value is "returned" back to the "Caller".
// function sum(a, b) {
//   return (total = a + b);
// }

// var funcExp = sum(20, 3);

// console.log(funcExp);

//Anonymous Function

// A function expression is similar to and has the same syntax as a function declaration
//One can define a "named" function expression or "anonymous" function expression

// var sum = function (a, b) {
//   return (total = a + b);
// };

// var funcExp = sum(20, 3);

// console.log("The sum of the two number is " + funcExp);

//ECMA Script

//Var ==> function scope
//Let and Const ==> Block scope

// function biodata() {
//   var myFirstname = "Shah";
//   console.log(myFirstname);

//   if (true) {
//     var myLastname = "Dhaval";
//     console.log(myLastname);
//     console.log(myFirstname);
//   }
//   console.log(myLastname);
// }

// biodata();

//Let and Const ==> Block scope

// function biodata() {
//   let myFirstname = "Shah";
//   console.log(myFirstname);

//   if (true) {
//     let myLastname = "Dhaval";
//     console.log(myLastname);
//     console.log(myFirstname);
//   }
//   console.log(myLastname);
// }

// biodata();

//Const

// function biodata() {
//   const myFirstname = "Shah";
//   console.log(myFirstname);

//   if (true) {
//     const myLastname = "Dhaval";
//     console.log(myLastname);
//     console.log(myFirstname);
//   }
//   console.log(myLastname);
// }

// biodata();

// Template literals

// JavaScript program to print table for given number (8)?

// for (let num = 1; num <= 10; num++) {
//   tableno = 8;
//   console.log(`${tableno} * ${num} = ${tableno * num} `);
// }

// Default parameters
// Default parameters allow named parameters to be intialized with default value if no value or undefined is pass

// function mult(a, b = 5) {
//   return a * b;
// }

// console.log(mult(5));

//Fat arrow function

//Noram function
// console.log(sum(5, 2));
// function sum(a, b) {
//   return `the sum of the two number is ${a + b}`;
// }

// Arrow function

// const sum = () => `the sum of the two number is ${(a = 5) + (b = 6)}`;
// console.log(sum());

// Array in JavaScript

// When we user Var then we can store only one value at a time.
// When we want to store multiple value then we can use a array.
// In JavaScript we have an array class and array are the prototype of this class.

// What we will do in array
// Traversal of an array

// var FriendList = ["Rahul", "Brijesh", "Milap"];

// console.log(FriendList[1]);

//if i want to check the length of element of an array

// console.log(FriendList[FriendList.length - 1]);

// We use for loop to navigate

// var FriendList = ["Rahul", "Brijesh", "Milap"];

// for (i = 0; i < FriendList.length; i++) {
//   console.log(FriendList[i]);
// }

// After ES6 we have for..in and for..of loop to

//For In Loop

// var FriendList = ["Rahul", "Brijesh", "Milap"];

// for (let elements in FriendList) {
//   console.log(elements);
// }

//For of Loop

// var FriendList = ["Rahul", "Brijesh", "Milap"];

// for (let elements of FriendList) {
//   console.log(elements);
// }

// Array.prototype.forEach()
// Calls a function for each elements in the array

var FriendList = ["Rahul", "Brijesh", "Milap"];

//Normal function

// FriendList.forEach(function (element, index, array) {
//   console.log(element + " Index is " + index + " And array is  " + array);
// });

// Fat Arrow function

// FriendList.forEach((element, index, array) => {
//   console.log(element + " Index is " + index + " And array is  " + array);
// });

// Searching and Filter in an array
// How to sort and Compare an array
// How insert,Add,Replace and Delete elements in Array(CRUD)
// Map(),Reduce(),Filter()

// Array Subsection Searching and Filter in an array

// Array.prototype.indexOf()
// Returns the first (least) index of an element within the array equal to an element,
// or -1 if none is found. It search the element from the 0th index number.

// var myFriendNames = ["Shah","Dhaval","Anilkumar", "Dhaval Shah", "Bonny Shah"];

// Array Subsection Perform CRUD

// Array.prototype.push()
// The Push() method adds one or more elements to the end of an array and returns the new length of array.

// const animals = ["pigs","goats","sheep"];

// animals.push("Chicken","Dog","Cow");

// console.log(animals);

// const animals = ["pigs","goats","sheep"];

// animals.push("Chicken");
// console.log(animals)

//Unshift adding element into from start position

// const count = animals.unshift("chicken");
// console.log(count);
// console.log(animals);

// 2nd example

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6)
// console.log(myNumbers);

// Array.prototype.pop()
// The pop() method removes the last element of an array and returns that element.
// Pop() method change the length of an elements

// const animals = ["pigs","goats","sheep"];

// console.log(animals);

// console.log(animals.pop());
// console.log(animals);
// console.log(animals.push("Dog"));
// console.log(animals);

// Shift() method removes and returns the first element of an array

// console.log(animals.shift());
// console.log(animals);

// const plants = ["flower", "kale" , "tomato"]
// plants.shift("tomato");
// console.log(plants);

// const months = ["jan","March","April","June","July"];

// Array.prototype.splice()
// Adds and/or removes element from an array.

// 1. Add Dec at the end of an array?

// Sol : 1
// const months = ["jan","March","April","June","July"];

// const NewMonths = months.splice(months.length,0,"Dec");

// console.log(months);
// 2. What is the return value of splice() method

// console.log(NewMonths);

// 3. Update 'march' to 'March' (update)?

// const months = ["jan","March","April","June","July"];

// const indexOfMonth = months.indexOf("Sep")

// if(indexOfMonth !== -1){
//    const updateMonth = months.splice(indexOfMonth,1,"Oct");
//    console.log(months);
// }else{

//     console.log("No data found");
// }

// console.log(months);

// 4. Delete June from an array?

// const months = ["jan","March","April","June","July"];

// const indexOfMonth = months.indexOf("June")

// if(indexOfMonth !== -1){
//    const updateMonth = months.splice(indexOfMonth,1);
//    console.log(months);
//    console.log(updateMonth);
// }else{

//     console.log("No data found");
// }

// const months = ["jan", "March", "April", "June", "July"];

// const indexOfMonth = months.indexOf("July");

// if (indexOfMonth !== -1) {
//   const updateMonth = months.splice(indexOfMonth, Infinity);
//   console.log(months);
//   console.log(updateMonth);
// } else {
//   console.log("No data found");
// }

// Find the square root of each element in an array

// let array1 = [25, 36, 49, 64];

// let arraySqr = array1.map((curElem) => {
//   return Math.sqrt(curElem);
// });

// console.log(arraySqr);

// Multiply each element by 2 and return only those element which are greater than 10?

// let arr = [2, 3, 4, 6, 8];

// let arr1 = arr
//   .map((curElem) => curElem * 2)
//   .filter((curElem) => curElem > 10)
//   .reduce((accumulator, curElem) => {
//     return (accumulator += curElem);
//   }, 8);

// console.log(arr1);

// reduce method

// flatten an array means to convert the 3d or 2d array into a single dimensional array

// const Array2D = [
//   ["zone_1", "zone_2"],
//   ["zone_3", "zone_4"],
//   ["zone_5", "zone_6"],
//   ["zone_7", "zone_8"],
// ];

// let flatarry = Array2D.reduce((accumulator, curElem) => {
//   return accumulator.concat(curElem);
// });

// console.log(flatarry);

// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in a single output value.

// the reducer funtion takes four arguments :

// accumulator
// current value
// current index
// source array

// let arr = [2, 3, 4, 6, 8];

// let sum = arr.reduce((accumulator, curElem) => {
//   return (accumulator *= curElem);
// });

// console.log(sum);

// What we will do

// Escape Character
// Finding a string in a string
// Searching for a String in a string
// Extracting string parts
// Replacing string content
// Extracting String Character
// Other useful methods


// Array Subsection Searching and Filter in an array

// Array.prototype.indexOf()
// Returns the first (least) index of an element within the array equal to an element,
// or -1 if none is found. It search the element from the 0th index number.

// var myFriendNames = ["Shah","Dhaval","Anilkumar", "Dhaval Shah", "Bonny Shah"];


// Array Subsection Perform CRUD

// Array.prototype.push()
// The Push() method adds one or more elements to the end of an array and returns the new length of array.

// const animals = ["pigs","goats","sheep"];

// animals.push("Chicken","Dog","Cow");

// console.log(animals);

// const animals = ["pigs","goats","sheep"];

// animals.push("Chicken");
// console.log(animals)

//Unshift adding element into from start position

// const count = animals.unshift("chicken");
// console.log(count);
// console.log(animals);

// 2nd example

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6)
// console.log(myNumbers);

// Array.prototype.pop()
// The pop() method removes the last element of an array and returns that element.
// Pop() method change the length of an elements


// const animals = ["pigs","goats","sheep"];

// console.log(animals);


// console.log(animals.pop());
// console.log(animals);
// console.log(animals.push("Dog"));
// console.log(animals);

// Shift() method removes and returns the first element of an array

// console.log(animals.shift());
// console.log(animals);

// const plants = ["flower", "kale" , "tomato"]
// plants.shift("tomato");
// console.log(plants);


// const months = ["jan","March","April","June","July"];

// Array.prototype.splice()
// Adds and/or removes element from an array.

// 1. Add Dec at the end of an array?

// Sol : 1
// const months = ["jan","March","April","June","July"];

// const NewMonths = months.splice(months.length,0,"Dec");

// console.log(months);
// 2. What is the return value of splice() method

// console.log(NewMonths);

// 3. Update 'march' to 'March' (update)?

// const months = ["jan","March","April","June","July"];

// const indexOfMonth = months.indexOf("Marche")

// if(indexOfMonth !== -1){
//    const updateMonth = months.splice(indexOfMonth,1,"march");
//    console.log(months);
// }else{

//     console.log("No data found");
// }




// console.log(months);





// 4. Delete June from an array?


// const months = ["jan","March","April","June","July"];

// const indexOfMonth = months.indexOf("June")

// if(indexOfMonth !== -1){
//    const updateMonth = months.splice(indexOfMonth,1);
//    console.log(months);
//    console.log(updateMonth);
// }else{

//     console.log("No data found");
// }

// const months = ["jan","March","April","June","July"];

// const indexOfMonth = months.indexOf("July")

// if(indexOfMonth !== -1){
//    const updateMonth = months.splice(indexOfMonth,1);
//    console.log(months);
//    console.log(updateMonth);
// }else{

//     console.log("No data found");
// }

//New Commit

// let GoodThings = ["Walk","Drink Water","Yoga","Healthy Food"]

// console.log(GoodThings);

// let NewThings = GoodThings.map((curElem,index,array) => {

//     return `Good Things is ${curElem} and index is ${index} and array of the good things is ${array}`;
    
// })
// console.log(NewThings);

//Array.prototype.map()

// let NewArray = arr.map(callback(currentValue[, index[, array]])){

    //return element for NewArray , after executing something 

// }[, thisArg]);

// Return a new array containing the result of calling a
// function on every element in this array.

// const array1 = [1,4,9,16,25];
// //Num>9

// let NewArray = array1.map((curElem,index,array) => {

//     return curElem > 9;

// })

// console.log(array1);
// console.log(NewArray);

// find the square root of an each element in an array?

// const array1 = [1,49,36,9,64];

// let arrysqr = array1.map((curElem,index,array) => Math.sqrt(curElem) );

// console.log(arrysqr);
// Multiplying each element by 2 and return those element which are greater than 10?

//alternate quotes

// let TestSentence = "This is 'test' ";

// console.log(TestSentence);


// Searching for a string in a string


// JavaScript counts position from zero
// 0 is the first position in a string, 1 is the second, 2 is third


// let TestSentence = "This is test";

// console.log(TestSentence.indexOf("is",5));

// String.prototype.lastIndexOf(searchValue [, fromIndex])
// Return the Index within the calling sting object of last occurrence of searchValue, or -1 if not found.

// let TestSentence = "This is test";

// console.log(TestSentence.lastIndexOf("s",6));

// Searching for a string in a string

// String.prototype.search(regexp)
// The search method searches a string for a specified value and returns the position of the match


// const TestSentence = "This is test";

// let MyData = TestSentence.search("is");

// console.log(MyData);

// Extracting String Parts

// There are 3 methods for extracting a part of a string

// slice(start,end)
// substring(start,end)
// substr(start,end)

// The slice() method extract the part of the string and returns the extracted part in a new string.

// The method takes two parameters : start position and end position 

// var str = "Apple, kiwi, Banana";

// let MyVar = str.slice(0,4);

// console.log(MyVar);

// slice() method selects the elements starting at the given start arguments, and ends at, but does not include, the given end argument.

// Display only 280 characters of the string like the one used in Twitter?

// let MyTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

// console.log(MyTweets.length);

// let ManageTextTweet = MyTweets.slice(0, 200);

// console.log(MyTweets);
// console.log(ManageTextTweet);

// console.log(ManageTextTweet.length);

// The substring() Method
// substring() is similar to slice()
// The difference is that substring method can not accept negative indexes.

// var str = "Apple, kiwi, Banana";


// let NewString = str.substring(5,-2);

// console.log(NewString);

// The substr() method
// substr() is similar to slice()

// The difference is that second parameters specified length of extracted part.

// var str = "Apple, kiwi, Banana";

// let NewString = str.substr(-6);

// console.log(NewString);

// Replace String Content()

// String.prototype.replace(searchFor, replaceWith)

// The replace method replace a specified value with another value into the string.

// let myBioData = "I Am Dhaval Shah";

// let NewBio = myBioData.replace('Dhaval', 'Rohan');

// console.log(NewBio);


// Points to remember 

// 1: The replace method does not change the string 
// it is called on. It returns a new string 
// 2: By Default the replace() method replace only the first match



// Extracting sting characters

// There are 3 method for extracting string characters

// chartAt(position)
// charCodeAt(position)
// property access [ ]


// The charAt() method 
// The charAt() method returns the characters at a specified index(position) in a string

// let str = "Hello World";

// let NewStr = str.charAt(0);

// console.log(NewStr);

// The charCodeAt() Method
// The charCodeAt() method returns the unicode of a character at a specified index in a string
// The method returns a UTF-16 code

// let str = "Hello World";

// let NewStr = str.charCodeAt(1);

// console.log(NewStr);


// Returns the unicode of the last character of a string

// let str = "Hello World";

// let LastChar = str.length - 1;

// console.log(str.charCodeAt(LastChar));


// Property Access

// var str = "Hello world";

// console.log(str[0]);

// Other useful method

// let myName = "Vinod Thapa";

// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// let fName = "Shah";
// let lName = "Dhaval";

// console.log(fName + lName);
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));
// console.log(`${fName} ${lName}`);

// String.trim()

// The trim() method removes whitespace from both side of a string 

// let Name = "     Shah Dhaval    ";

// console.log(Name.trim());

// Converting a String to an array
// A String can be converted to an array with split() method

// var txt = "a,b,c,d,e";

// console.log(txt.split(",")); // Split on Commas
// console.log(txt.split(" ")); // Split on Spaces
// console.log(txt.split("|")); // Split on pipe
























































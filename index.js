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

let GoodThings = ["Walk","Drink Water","Yoga","Healthy Food"]

console.log(GoodThings);

let NewThings = GoodThings.map((curElem,index,array) => {

    return `Good Things is ${curElem} and index is ${index} and array of the good things is ${array}`;
    
})
console.log(NewThings);

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

let TestSentence = "This is 'test' ";

console.log(TestSentence);


// Searching for a string in a string





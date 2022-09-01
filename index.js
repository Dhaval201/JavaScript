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




















































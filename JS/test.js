//^ Functional programming

// //*1.Function Declaration

// function message (name,city){ // Here name is parameter
//     console.log(`${name}, welcome to functions`);
//     console.log(`From ${city}` );
// }

// message("Abhinav", "darbhanga"); // here Abhinav and darbhanga are Arguments
// message("Vikash", "Bilaspur");

// CREATING A FUNCTION TO RETURN SUM OF NUMBERS

// function sum(min, max){
//     let add=0;
// for(let i=min;i<=max; i++)
//         {
//            add+=i;
// }
//     console.log(add);
// }

// sum(100,109);
// sum(100,1090);
// sum(100,10900);
// sum(100,109000);

// //*2.Anonymous Function and Named Function Expression

//anonymousFunction();//! It will give error as we are trying to access the function before declaring it

// var anonymousFunction= function(){
//     console.log("I am Anonymous Function");
// }//~ This is anonymous function as it does not have any identity it is assigned to a variable.

// anonymousFunction();
// console.log(typeof(anonymousFunction));// Function

//Named function expression: Assigned to a variable but with name

// console.log(typeof(namedFunctionExpression));//why this is undefined
// var namedFunctionExpression= function greetMessage (){
//     console.log("HELLO BROTHER");
// }
// console.log(typeof(namedFunctionExpression));

// namedFunctionExpression(); //hello brother

//*3.Return function

// function sum(x,y){
//     return x+y;
// }

// const result= sum(33,45);
// console.log(result);

//~Pure function: 1. Accept the parameter 2. returns the value and not changing data type(not mutating the value)

//!never do console.log inside function

//* 4.Arrow Functions

//~ Normal function expression
// const add0=function (c,d){
//     return c+d;
// }

//Arrow function

// const add1=(a,b)=>{
//     return a+b;
// }
// const add=(x,y)=> x+y;

//~if return statement is one line we can write it as above statement

//*5. Exercise on Functions

// Sum of all numbers

// const sumOfNumbers= (min,max)=> {
//         let add=0;
//     for(let i=min;i<=max; i++)
//             {
//                add+=i;
//     }
//     return add;
// }

// const total= sumOfNumbers(100,1000);
// console.log(total);

// Print 1- 1sec,2-2 sec, 3- 3 sec

// function x() {
//     for (var i = 1; i <= 5; i++) {
//     function close(i) {
//     setTimeout(function () {
//     console.log(i);
//     }, i * 1000);
//~ put the setT function inside new function close()
//     }
//     close(i); //~ everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
// }
//     }
//    x();

//^ STRING METHODS IN JS-----

//*1. Iterating over string

//*1.1    Print till any character and after that character encounters print nothing

// function displayChar(str, v) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == v) break;
//   }
// }
// console.log(displayChar("hello", "l")); //todo why not working check and work

//*1.2    Count total number of specific char in any string

//Method 1
// let displayMessage= "Hello Brother"
// let count=0;
// for(let char of displayMessage ){
//     if(char=='e'){
//         count++;
//     }
// }

// console.log(count);

//Method 2
// function displayChar(str, v){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if (str[i]==v){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(displayChar("HelloBrother how are you", 'o'));

//*1.3 Return Index of character in string

// function displayChar(str, v){
//     for(let i=0; i<str.length; i++)
// {
//     if(str[i]==v)
//     return i;
// }
// }

// console.log(displayChar('hello' , 'e'));

//*2 CharAt()

//~str.charAT() Returns character at given index of string.if the index is out of bond it will return ""(empty string)

// function func() {

//~ Original string
// var str = 'JavaScript is object oriented language';

//~ Finding the character at given index
//   var value = str.charAt(0);
//   var value1 = str.charAt(4);
//   console.log(value);
//   console.log(value1);
// }
// func();

//*3. IndexOf()

//~ str.indexOf() function finds the index of the first occurrence of the argument string in the given string. The value returned is 0-based. The syntax of the function is as follows:

//~ str.indexOf(searchValue , index)

//~ JavaScript to illustrate indexOf() function
// function func() {

//~ Original string
//   var str = 'Departed Train';

//~ Finding index of occurrence of 'Train'
//   var index = str.indexOf('Train');
//   console.log(index);
// }
// func();

//& Note: The searchValue is not present in the string, therefore this function returns -1 . The first and the only index where the string is present , therefore this function returns that as the answer.

//*4 includes()

//~ In JavaScript, includes() method determines whether a string contains the given characters within it or not. This method returns true if the string contains the characters, otherwise, it returns false.

//& Note: The includes() method is case sensitive i.e, it will treat the Uppercase characters and Lowercase characters differently.

//~ Syntax:
//~ string.includes(searchValue, start)

//~ If second parameter is not present it will search in  whole string

// var str = "Welcome to GeeksforGeeks.";
// var check = str.includes("Geeks");
// if(check){
// 	console.log("present");
// }
// else{
// 	console.log("not present");
// }

//~ Explanation: Since the second parameter is not defined, the search will take place from the starting index. And it will search for Geeks, as it is present in the string, it will return a true.

//*5 str.toUpperCase() and str.toLowerCase()

//~ str.toUpperCase() method converts the entire string to Upper case. This method does not affect any of the special characters, digits, and the alphabets that are already in the upper case.

//~Syntax:
//~str.toUpperCase()

//~This method returns a new string in which all the lower case letters are converted to upper case.

// function func() {
//   var str = 'geeksforgeeks';
//   var string = str.toUpperCase();
//   console.log(string);
//   }
//   func(); //GEEKSFORGEEKS

//~str.toLowerCase() method converts the entire string to lower case. This method does not affect any of the special characters, digits, and the alphabets that are already in the lower case.

//~ Syntax:
//~ str.toLowerCase()

//~ Return value:
//~ This method returns a new string in which all the upper case letters are converted to lower case.

// function func() {
//     var str = 'GEEKSFORGEEKS';
//     var string = str.toLowerCase();
//     console.log(string);
// }
// func();

//*6 Sub Strings

// const userName="Anjani Kumar Kashayp"

// const subsString= userName.substring(0,10);

// console.log(subsString);

//* Trim

//~Trim removes the space (Extra character)

// const text='        hey!! welcome to      Javascript'

// console.log(text.trim().substring(0,90));

//^ Arrays (Non Primitive DataType): storing Multiple data in single location

//*1. Iterating over an Array

// let studentNames = [
//   "Abhinav",
//   "shantanu",
//   "Sourav",
//   "Mohan",
//   "Rohan",
//   "naval",
//   "Amit",
//   "sumit",
//];

//~ for let-- used to iterate over an array

// for(let i=0;i<studentNames.length;i++)
// {
//   console.log(studentNames[i]);

// }

//~for let of-- if you not need index use for let of

// for(let name of studentNames){
//   console.log(name);

// }
//~ for let in -- Itr returns the index of array of student

//  for (let index in studentNames){
//     console.log(studentNames[index]);
//  }

//*2. Copy By Reference

// let arr1= [1, 2, 3];
// let arr2= arr1;

// console.log("arr1-:", arr1);
// console.log("arr2-:", arr2);

//  arr2.push(8);

// console.log("arr1-:", arr1);
// console.log("arr2-:", arr2);

//~ Here arr1 and arr2 are pointing to same memory location which is the reason when we changed the value in arr2 original array i.e. arr1 also got changed. This is called shallow copy

//~ To avoid this situation we need to use for loop or Spread operator

//~ Spread operator

// let arr3=[1,2,3];
// let arr4=[...arr3];

//   console.log("arr3-:", arr3);
//   console.log("arr4-:", arr4);

//   arr4.push(7);
//   console.log("arr3-:", arr3);
//   console.log("arr4-:", arr4);

// let a="Abhinav"
// let b= [...a];

// console.log(b);

//~  For Loop

//  let arr4=[1,2,3,4];
//  let arr5=[];
// for(let number of arr4) {
//   arr5.push(number);
// }

// console.log(arr4);
// console.log(arr5);

// arr5.push(7)

// console.log(arr4);
// console.log(arr5);

//*3,4,5. Array Method -Push and concat

//~Mutable(Changed) and Immutable (Not changed)

//~Push

//  let fruits=["Apple","Mango","orange"];
//  fruits.push("Banana","PineApple");
//  console.log(fruits);

//~Concat

//  let arr1=[1,2,3,4]
//  let arr2=[5,6,]
//  let arr3=[7,8]

//  let arr4=arr1.concat(arr2,arr3);
//  console.log(arr4);

//~Pop

//~The arr.pop() method is used to remove the last element of the array and also returns the removed element. This function decreases the length of the array.

// function func() {
//   var arr = ['GFG', 'gfg', 'g4g', 'GeeksforGeeks'];

// Popping the last element from the array
//   arr.pop();
//   console.log(arr);
//   }
//   func(); //[ 'GFG', 'gfg', 'g4g' ]

//~Array.slice()

// ~ The arr. slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.

//~Syntax:

//~~ arr.slice(begin, end)
//~ Parameters: This method accepts two parameters as mentioned above and described below:

//~~ begin: This parameter defines the starting index from where the portion is to be extracted. If this argument is missing then the method takes begin as 0 as it is the default start value.

//~~ end: This parameter is the index up to which the portion is to be extracted (excluding the end index). If this argument is not defined then the array till the end is extracted as it is the default end value If the end value is greater than the length of the array, then the end value changes to the length of the array.

// function func() {
// Original Array
// 	var arr = [23,56,87,32,75,13];
// Extracted array
// 	var new_arr = arr.slice(2,4);
// 	console.log(arr);
// 	console.log("<br>");
// 	console.log(new_arr);
// }
// func();

//~iNCLUDES

//~ The array.includes() method is used to know either a particular element is present in the array or not and accordingly, it returns true or false i.e, if the element is present, then it returns true otherwise false.

//~Syntax:

//~ array.includes(searchElement, start)
//~ Parameter: This method accepts two parameters as mentioned above and described below:

//~ searchElement: This parameter holds the element which will be searched.

//~ start: This parameter is optional and it holds the starting point of the array, where to begin the search the default value is 0.

//~ Return Value: It returns a Boolean value i.e, either True or False.

//~Input : [1, 2, 3, 4, 5].includes(2);

// Taking input as an array A
// having some elements.
//var A = [ 1, 2, 3, 4, 5 ];

// includes() method is called to
// test whether the searching element
// is present in given array or not.
//a = A.includes(2)

// Printing result of includes().
//console.log(a);

//~Array.sort()

//~  The arr.sort() method is used to sort the array in place in a given order according to the compare() function. If the method is omitted then the array is sorted in ascending order.

//~ Syntax:

//~ arr.sort(compareFunction)
//~ Parameters: This method accepts a single parameter as mentioned above and described below:

//~ compareFunction: This parameter is used to sort the elements according to different attributes and in a different order.

//~ compareFunction(a,b) < 0
//~ compareFunction(a,b) > 0
//~ compareFunction(a,b) = 0
//~ Return value: This method returns the reference of the sorted original array.

//~ Below is an example of Array sort() method.

// var arr = [2, 5, 8, 1, 4]
// console.log(arr.sort());
// console.log(arr);

//~Split

//~ ~   JavaScript str.split() method is used to split the given string into an array of strings by separating it into substrings using a specified separator provided in the argument.

//~ Syntax:

//~ str.split(separator, limit)
//~ separator: It is used to specify the character, or the regular expression, to use for splitting the string. If the separator is unspecified then the entire string becomes one single array element. The same also happens when the separator is not present in the string. If the separator is an empty string (“”) then every character of the string is separated.
//~ limit: Defines the upper limit on the number of splits to be found in the given string. If the string remains unchecked after the limit is reached then it is not reported in the array.
//~ Return value: This function returns an array of strings that is formed after splitting the given string at each point where the separator occurs.

//   function func() {
//Original string
//     var str = 'Geeks for Geeks'
//     var array = str.split("for");
//   console.log(array);
// }
// func(); // o/p: [ 'Geeks ', ' Geeks' ]

// function func() {
//Original string
//   var str = 'It iS a 5r&e@@t Day.'
//   var array = str.split(" ");
//   console.log(array);
// }
// func();// o/p: [ 'It', 'iS', 'a', '5r&e@@t', 'Day.' ]

// function func() {

// Original string
//   var str = 'It iS a 5r&e@@t Day.'

// Splitting up to 2 terms
//   var array = str.split(" ",2);
//   console.log(array);
// }
// func();//o/p: [ 'It', 'iS' ]

//~Array join() Method

//~The arr.join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).

//~ Syntax:

//~ array.join(separator)
//~ Parameters: This method accepts single parameter as mentioned above and described below:

//~ separator: It is Optional i.e, it can be either used as parameter or not. Its default value is comma(, ).
//~ Return Value: It returns the string which contain the collection of array's elements.

//~ Below example illustrate the Array join() method in JavaScript:

//~ Example 1: In this example the function join() joins together the elements of the array into a string using ‘|’.
//~ var a = [1, 2, 3, 4, 5, 6];
//~ print(a.join('|'));
//~ Output:

//~ 1|2|3|4|5|6

//*6. Spread Operator

// spread operator doing the concat job
// let arr = [1,2,3];
// let arr2 = [4,5];

// arr = [...arr,6,7, ...arr2, 13, 14];
// console.log(arr);

//*7 Destructuring Array

// let arr=[12,13,14,["d","e","f"],5,6];

// let [, , , ...digits]= arr

// console.log(arr);
// console.log(digits);

//~It can also be useful in fetching API where we have nested objects
// Swapping element using Destructuring the Array
// let a=5;
// let b=7;

// [a,b]=[b,a]
// console.log(a);
// console.log(b);

//^ Object

//*1. Object properties

//   const obj={
    //~ These are the property in object which is in key value pair "Name" is key and value is "Abhinav". Key is always in string even if we don't write it in string JavaScript do implicit type conversion and convert that in string. only when your key has multiple words you have to convert it to string.

//     name: 'Abhinav',
//     age:99,
//     job:"Software engineer",
//     course: ['JS', 'Program','Computer', 'Programming'],
//     "Is Administrator": true
//   };
  
//   console.log(obj.name);
//   console.log(obj["Is Administrator"]);
//~We can call by using dot and using this also but if we have multiple words in our key then we need to call them like this

//   console.log(typeof obj);
 

 //* 2. Function as property
 //~ Link of Article: https://www.geeksforgeeks.org/batch/fsrnl-35/track/beg-to-adv-objects/article/OTA1MA%3D%3D
    
  //~ In JavaScript, functions can be used as properties of objects. This can be a powerful tool for organizing and encapsulating functionality within an object, making it easier to maintain and reuse code.To better understand this concept, let's dive into some code examples and interact with them.

  //~ Step 1: Defining a Function Property

  //~Let's start by creating an object that contains a function property:

  // const person={
  //   name: "Abhinav",
  //   age: 25,
  //   sayHello: function(){
  //     console.log('Hello', this.name);
  //   }
  // }
  // console.log('person');
  // person.sayHello();


 //*3 Computed Properties

//*4. ShortHand properties: Where key and value are same but value is in the variable:

  // function getObjects(name, city) {
  //   return{ name,
  //     city
  //   }
  // }

  // const student1= getObjects('abhinav', 'Darbhanga')
  // console.log(student1);
  // const student2= getObjects('abhinav2', 'Darbhanga2')
  // console.log(student2);

 //*5 For in// In object we can only use the for in loop.

//  const obj={
//   name: 'abhinav',
//   city: 'Darbhanga'
//  }

//   const isPresent= "city" in obj;
//   console.log(isPresent);//~here we are using for in loop to check if item is present in object or not

  //~here in object we can use For in loop to iterate over objects

  // for(let key in obj){
  //   console.log(key,obj[key]);

  // }

  //*6. Object reference and shallow copy:
   
  //~objects are not copy by value they are copy by  reference.If we are creating two objects and copying one into another then both of them will point to the same memory location. cHANGING ANY VALUE IN ONE OF THE OBJECT WILL IMPACT BOTh of them this is called shallow copy

  // const person1={
  //   name: 'abhinav',
  //   age:'19'
  // }
   

  // const person2= person1;
  // person1.age=111;
  //~Here changing value in one of them will impact both of the object

  // console.log(person1);
  // console.log(person2);

  //~To avoid this we have deep copy, that we will see later.
  //~ We c an use object.assign() to avoid this but it will not work in case of nested object so this is also shallow copy

  //  const person1={
  //   name: 'abhinav',
  //   age:'19',

  //   address:{
  //     city:"darbhanga",
  //     state:"Bihar"
  //   }
  // }
   

  // const person2= Object.assign({},person1);

  // person2.name='Abhinav23';
  // person1.age='29';
  // person2.address.state="Gujrat"// As it does not work in case of nested object so it will act like a shallow copy.
  // console.log(person1);
  // console.log(person2);

  //*7. optional chaining

     //~The optional chaining ‘?.’ is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist. It was recently introduced by ECMA International, Technical Committee 39 – ECMAScript which was authored by Claude Pache, Gabriel Isenberg, Daniel Rosenwasser, Dustin Savery. It works similar to Chaining ‘.’ except that it does not report the error, instead it returns a value which is undefined. It also works with function call when we try to make a call to a method which may not exist.

     //~If this code gives any error try to run it on online JavaScript editor.

    //~Example: Optional Chaining with Object

  // const user = {
  //   dog: {
  //     name: "Alex"
  //   }
  // };
  // console.log(user.address) // Undefined
  //console.log(user.address.city);
  // ~This will give error as address not exist and we are searching for city inside the address
  //~Here comes optional chaining in picture to avoid this error

  // console.log(user.address?.city)

  // console.log(user.cat?.name); //undefined
  // console.log(user.dog?.name); //Alex
   //console.log(user.cat.name);//gives error

  //& Optional chaining in case of functions

  // let user1 = () => console.log("Alex");
  // let user2 = {
  //   dog(){
  //     console.log("I am Alex");
  //   }
  // }
  // let user3 = {};
  
  // user1?.();       // Alex
  // user2.dog?.();   // I am Alex
   //user3.dog();     // ERROR - Uncaught TypeError:
                   // user3.dog is not a function.
  // user3.dog?.();   // Will not generate any error.

  
 //*9. DESTRUCTURING OBJECT

//  let person = {
//   name: "John",
//   contact: {
//       phone: "987-654-3210",
//       email: "john123@xyz.com",
//       address: {
//           city: "Berlin",
//           country: "Germany"
//       }
//   }
// };

//~ Destructuring Object is nothing but assigning properties of object to a variable

// let {name,contact}= person;

//~we can use ...rest to include all the object it will destructure and iterate through all the rest of the object 
  // let{name, ...rest}= person;
  // console.log(name, rest);

  //~If we want to access the nested object inside the object
  // let{contact:{email}}=person;
  // console.log(email);

  // let{contact:{address:{country}}}=person;
  // console.log(country);

   //*10. Key, Values, entries

   //~1) Object.entries(): returns an array containing sub-arrays that contain Key-value pair from the Original Object.


  //  const obj = {
  //   name:"Prakash",
  //   age:99,
  //   city:"Mumbai"
  //  };
   
  //  const entries = Object.entries(obj);
  //  console.log(entries);
   
//~2) Object.keys(): this method returns an array containing all the keys of an Object.

  //  const obj = {
  //   name:"Prakash",
  //   age:99,
  //   city:"Mumbai"
  //  };
   
  //  const keys = Object.keys(obj);
  //  console.log(keys);

  //~3) Object.values(): this method returns an array containing all the values of the Object.

  // const obj = {
  //   name:"Prakash",
  //   age:99,
  //   city:"Mumbai"
  //  };
   
  //  const values = Object.values(obj);
  //  console.log(values);

  //*11. This keyword

  //~In simple terms, this refers to the object that the current function is a method of. It can also refer to the global object (i.e. window in a browser environment) if the function is not part of an object.

  // const person = {
  //   name: "John",
  //   sayHello: function() {
  //     console.log(`Hello, my name is ${this.name}!`);
  //   }
  // };

  // person.sayHello(); // Output: "Hello, my name is John!"

  //~In this example, this refers to the person object because the sayHello function is part of that object. When we call person.sayHello(), the output is "Hello, my name is John!" because this.name refers to the name property of the person object.

 //~ How is "this" Determined?

  //~The value of this is determined at runtime based on how a function is called, not how it is defined. There are four ways that this can be determined:

  //~1. Global Scope: If a function is called in the global scope (i.e. not part of an object), this refers to the global object. In a browser environment, the global object is window.

  // function sayHello() {
  //   console.log(`Hello, my name is ${this.name}!`);
  // }
  
  // sayHello(); // Output: "Hello, my name is undefined!" (assuming there is no global variable called "name")
  
  //~2.Method Invocation: If a function is called as a method of an object, this refers to that object.
  // const person = {
  //   name: "John",
  //   sayHello: function() {
  //     console.log("Hello, my name is " + this.name);
  //   }
  // };

  // person.sayHello(); // Output: "Hello, my name is John!"


  //~3.Constructor Invocation: If a function is called with the new keyword, this refers to the newly created object.

  // function Person(name) {
  //   this.name = name;
  //   this.sayHello = function() {
  //     console.log(`Hello, my name is ${this.name}!`);
  //   }
  // }

  // const person = new Person("John");
  // person.sayHello(); // Output: "Hello, my name is John!"

  //~4.Explicit Binding: If a function is called using call() or apply(), this is explicitly set to the object passed as an argument to call() or apply().

    // function sayHello() {
    //   console.log(`Hello, my name is ${this.name}!`);
    // }

    // const person = {
    //   name: "John"
    // };

    // sayHello.call(person); // Output: "Hello, my name is John!"

    
  //*12 Function borrowing

  //~ Function borrowing is the concept of reusing a method from one object on another object. This can be useful when you have two objects that share similar properties or functionality but are not related through inheritance.

  //~ For example, imagine you have MANY objects person1 and person2 and so on with similar properties and methods, but they are not related through inheritance:
  
  // const person1 = {
  //   name: "Rishi",
  //   age: 30,
  
  // };
  
  // const person2 = {
  //   name: "Harsh",
  //   age: 25
  // };
 
  // const person3 = {
  //   name: "Abhinav",
  //   age: 35
  // }

  // function sayHi(degree, year){
  //   console.log( "Hi, " + this.name, degree, year );// This will always refer to object which we call
  // }

  // ~ Now, let's say we want to borrow use the HI function, we can use call apply and bind to use them. Rather then defining the function in each object, we have defined it at one place and can use it.

  //~Call
  //  sayHi.call(person1,"B.Tech", "Second");// value of this is user1
  //  sayHi.call(person2, "B.Tech", "Third");

  //~Apply
  //~(only difference is in apply we have to pass the argument in form of array for the function parameter )
  // Also, apply has only two arguments the first is the object and second is array which has all the arguments for the function parameter
  // sayHi.apply(person1, ["B.Tech", 2015])
  // sayHi.apply(person2, ["B.Tech", 2018])

    //~ this is called explicit binding if we would have defined the function inside any particular object and this would have pointing to that particular object which is called implicit binding. 

     //*13.Bind
     
  
  // const user= sayHi.bind(person1,"B.Tech", "Second");
  // user();


  //^ More about Functions

   //*1. Pure Functions

   //~1. It takes an Argument
  //~2. It should return something
  //~3. For same input you should get the same output
  //~4. The result should not be influenced by outer parameter
  //~5. It should not mutate original argument


  //~ Example Pure function:

//   function calculateGST( productPrice ) {
//     return productPrice * 0.05;
// }

//~The above function will always return the same result, if we pass the same productPrice. In other words, its output doesn't get affected by any other values / state changes. So we can call "calculateGST" function a Pure Function.

  //~ Impure function 

//   var tax = 20;
// function calculateGST( productPrice ) {
//   return productPrice * (tax / 100) + productPrice;
// } 

//~We have defined the variable outside the function which is making output to be dependent on external variables.


//& Note: If a pure function calls a pure function, this isn’t a side effect and the calling function is still considered pure. (Example: using Math.max() inside a function)

//& NOTE: Below are some side effects (but not limited to) which a function should not produce in order to be considered as a pure function -

//~ Making a HTTP request
//~ Mutating data
//~ Printing to a screen or console
//~ DOM Query/Manipulation
//~ Math.random()
//~ Getting the current time


  //* 2.First Class function

  //~First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treat function as a first-class-citizens. This means that functions are simply a value and are just another type of object.

  //~A function can be assigned to a variable.(Function expression)
    
  // const greetMessage=function(){
    //   console.log("Welcome to Function Expression!");
    // }

    // greetMessage();

  //~A function can be passed as a argument to the function

  //  function wrapper(){
  //   return "Hello, I am wrapper function!";
  //  }

  //  function greet(inner, name){
  //     console.log(inner(), name);
  //  }

  //  greet(wrapper, "Abhinav");//& here we are passing wrapper function in the Argument



  //~A function can be returned by another function

  //  function greetMessage(){
  //   function wrapper(){
  //     console.log("Hi, I am wrapper function!");
  //   }
  //   return wrapper;
  //  }

  // greetMessage()();

  //*3. Higher order function

    //~ A function that can take another function as a argument or return a function are higher order function

    //? Example 1: function that can take another function as a argument
      //~ Wrapper function is a first class function as it can be passed as a argument to the function
    // function wrapper(){
    //   return "I am wrapper function!";
    // }

    //~ greetMessage() is Higher order function(we are taking another function(wrapper) as an argument)
    // function greetMessage(wrapper){
    //   console.log("Abhinav", wrapper());
    // }
    // greetMessage(wrapper);

    //? Example 2: function that returns another function are HOF

    //~ greetMessage() is HOF as it is returning another function 
    // function greetMessage(){
      //~ wrapper() is a first class function as it can be returned by another function
  //     return function wrapper(){
  //       console.log("Hi, I am wrapper function!");
  //     }
      
  //   }

  // greetMessage()();

    
    //?: USE CASE OF HOF function

    //~ Without HOF: If we have to find square cube of a number

    //& Note: you might think below functions are impure function but it is not as we are using temparr and not modifying arr


    // const arr=[2,3,4,5 ];

    // function square(arr){
    //   let temparr=[];
    //   for(let number of arr){
    //     temparr.push(number**2)
    //   }
    //   return temparr;
    // }
    // console.log(square(arr));
    
    // function cube(arr){
    //   let temparr=[];
    //   for(let number of arr){
    //     temparr.push(number**3)
    //   }
    //   return temparr;
    // }
    // console.log(cube(arr));
    
    //~the problem with above code is we have to write logic everytime which is violation of DRY principle, we will use HOF to write the logic and create cube,square, etc. as First class function to pass it as argument in HOF 
    

    //~First class function
    // const arr=[2,3,4,5 ];
    // function square(number){
    //   return number**2;
    // }
    //~First class function

    // function cube(number){
    //   return number**3;
    // }

    //~HOF~ First class functions are passed here as a argument in HOF

    // function calculatePower(wrapper, arr){
    //   let tempArr=[];
    //   for(let number of arr){
    //     tempArr.push(wrapper(number))
    //   }
    //   return tempArr;
    // }
  
    // console.log(calculatePower(square, arr));
    // console.log(calculatePower(cube, arr));

    //*4. MAP

    //~map() method: It applies a given function on all the elements of the array and returns the updated array. It is the simpler and shorter code instead of a loop. The map is similar to the following code: 

    //~Using for loop
        //arr = new Array(1, 2, 3, 6, 5, 4);
        // for(let i = 0; i < 6; i++) {
        //     arr[i] *= 3;
        // }
        // console.log(arr);

       //~using map()

        // const cube= arr.map((number)=>{
        //   return number**3;
        // })
        // console.log(cube);

    //~ So, the original arr.map function takes a callback function as an argument and that callback function can have three arguments passed into it :
    //~ a. current value
    //~ b. index of the current value [optional]
    //~ c. array [optional]


    //~MAP without arrow function

    //const arr = [1, 2, 3, 4, 5];

    // function double(x) {
    //   return x * 2;
    // }
    // const output = arr.map(double);
    // console.log(arr);

    //~Same code with Arrow function
    
    // const double= arr.map((number)=>{
    //   return number**2;
    // }) 
    //  console.log(double);

  //*5. Filter function

  //~ filter() method: It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition. It is a simpler and shorter code instead of the below code using a loop:
  
  //~Without using filter function

  // arr = new Array(1, 2, 3, 6, 5, 4);
  // new_arr = []
  // for(let i = 0; i < 6; i++) {
  //     if(arr[i] % 2 == 0) {
  //         new_arr.push(arr[i]);           
  //     }
  // }
  // console.log(new_arr);

  //~With using filter function
  //~ As observed from above code we don't need to write if condition as above in case of filter function
  // const evenNumber=arr.filter((numbers)=>{
  //   return numbers%2==0;
  // })

  // console.log(evenNumber);

  //? Use Case of filter function in searching function (Search and delete)
  //Todo: Will add the code for search and delete

  //*6. Reduce functionality 

  //Todo-- Connect with ARUSH to understand
  //~reduce function is mostly used in place where we have to calculate, like total cart value

  let cart=[
    {
      price:200,
      quantity:2,
    },
    {
      price:200,
      quantity:2,
    },
    {
      price:200,
      quantity:2,
    }
  ];

  const cartValue=cart.reduce((curr,number)=>{
    curr=curr+number.price*number.quantity;
    return curr;
  },0)
  console.log(cartValue);
  //~For reference so that at time of revision you can understand reduce easily by seeing the map function
  // const cartValue= cart.map((number)=>{
  //  return number.price;
  // })
  // console.log(cartValue);

  //*7 Argument Object

    //~   All the regular functions instead of Arrow functions have a special Object called Arguments Object that contains all the arguments passed to a function. It is an array Like Object present locally inside a function and it contains all the arguments passed to a function.

  //~ In javascript, if we pass more arguments than the specified parameters it won't give us an error. let's try to understand this with an example -
 

  // function calculateTotal(a,b){
  // return a + b;
  // }

  // const total = calculateTotal(3,4,5,6,7,8,9);
  // console.log(total); //7

  //~ As the output is 7 so it is true that it is not giving us an error but what is happening with the other arguments passed in a function call.
  //~ here is the argument object that comes into play. It stores all the arguments provided to it . Remember it is not a usual Object but an array-like Object. So we have a limit over the operations that we can perform over this arguments Object.

  // function calculateTotal(a,b){
  //   console.log(arguments);
  //  }
   
  //  calculateTotal(3,4,5,6,7,8,9);

    // ~  We also have some caveats in this argument Object.
    //~ we can use the length method over this but we cannot use methods like map, filter, reduce that we use on normal Arrays.

    //~ So the solution to this problem is to convert the arguments object into an array so that we can use all the methods that are generally available for arrays.


    // function calculateTotal(a,b){
    //   const arr1 = [...arguments];
    //   console.log(arr1);
    //   console.log(arguments);
    // }
    
    // calculateTotal(3,4,5,6,7,8,9);

    //*8 REST OPERATOR

    //~ So basically rest parameter collects all the remaining arguments and forms an array containing all of them as the name suggests rest parameter.

    //~ The most important Point to remember about the rest parameter is that it should always be used as the last parameter of the function otherwise there will be a syntax error.

    //~ The rest parameter is valuable when you are unsure about the number of arguments a function will have. It collects all these arguments into an array, allowing you to perform various manipulations to achieve the desired results using that array.

    //~ When we have to find the total/sum of all the numbers but we are not sure of the number of arguments we can use rest parameter

  //   function calculateTotal(...rest){
  //     let total=0;
  //     for(let numbers of rest){
  //       total+=numbers
  //   }
  //   return total;
  // }

  // console.log(calculateTotal(12,34,56,78,99,34,22,33,44,)); 

  //*Rest Vs Spread

  
  

  //*Closures 












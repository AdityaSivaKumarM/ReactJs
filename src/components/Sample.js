// You're tasked with building a simple TODO list application in React. The application should allow users to:

import { object } from "prop-types";
import { useImperativeHandle, useRef } from "react";

 
// Add a new TODO item.
// Mark a TODO item as completed.
// Remove a TODO item.
// Your task is to implement the necessary components and logic to achieve this functionality.

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map((key) => [key, obj[key]]);
const map = { a: 1, b: 2, c: 3 };

const result = Object.values(map);

console.log(result);
// Print max array value:a
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;

for (let i=0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}

console.log(largest);


let original = ["olleH", "!!yad dooG"];
 let reversed = "";
 for (let i = original.length - 1; i >= 0; i--) {
 reversed += original[i]; 
 } 
 console. log(reversed);
let arrStrs = ["olleH", "!!yad dooG"];
let outputStrs = [];
for(let i=0;i<arrStrs.length;i++){
    outputStrs.push(arrStrs[i].split('').reverse().join(''))
}
console.log(outputStrs);

  
  const images = [1,2,3,2,3,4,2]
  const uniqueTags1 = [];
images.map(img => {
    if (uniqueTags1.indexOf(img) === -1) {
        uniqueTags1.push(img)
    }
});
console.log(uniqueTags1)

//palindrome
const palindrom = "racecar";
let strr = palindrom.split('').reverse().join('');
console.log(strr == palindrom); // true

//Anagram
const anagram1 = 'listen';
const anagram2 = 'silent';
let str1 = anagram1.split('').sort().join('');
let str2 = anagram2.split('').sort().join('');
console.log(str1 == str2); // true 

//factorial
const num = 5;
let f=1;
for(let i=1;i<=num;i++){
    f*=i;
}
console.log(f);

//longest word
let sentese = "Hi Hellow JavaScript Hellow";
let word = sentese.split(" ");
let longestword = "";
for(let words of word){
    if(words.length >longestword.length){
          longestword = words;
    }
}
console.log(longestword);

// print max or min values
var numbers = [2, 4, 9, 2, 0, 16, 24];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0],                      
    secondSmallest = sorted[1],                
    secondLargest = sorted[sorted.length - 2], 
    largest  = sorted[sorted.length - 1];

console.log('Smallest: ' + smallest);
console.log('Second Smallest: ' + secondSmallest);
console.log('Second Largest: ' + secondLargest);
console.log('Largest: ' + largest);


// Function which pushes all zeros to end of an array.  
function pushZerosToEnd(arr, n)  {
    let count = 0;
    for (let i = 0; i < n; i++)  
        if (arr[i] != 0)  
            arr[count++] = arr[i];  
    while (count < n)  
        arr[count++] = 0;  
};
// Driver code 
    let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];  
    let n = arr.length;  
    pushZerosToEnd(arr, n);  
    document.write("Array after pushing all zeros to end of array :<br>");  
    for (let i = 0; i < n; i++)  
        document.write(arr[i] + " "); 
		
			
//Reverse of a string:
let test = "hello how are you";
function reverse1(str){
  var r = "";
  for(var i = test.length - 1; i >= 0; i--){
    r += test.charAt(i);
  }
  return r;
}
console.log(reverse1());

let original1 = "Hello World";
 let reversed1 = "";
 for (let i = original1.length - 1; i >= 0; i--) {
    reversed1 += original1[i]; 
 } 
 console. log(reversed1);

		

//reverse of string with using method:
function wordsReverser(string){
return string.split("").reverse().join("").split(" ").reverse().join(" ")  
}

console.log(wordsReverser('New string, same results.'))

//remove duplicates in string:
let str = "000234239999233";
const duplicateString = function(){
    let dupArray = str.split("");
    let duplicate=dupArray.filter((obj,index)=>{
        return dupArray.indexOf(obj) == index
    })
    return duplicate.join("");
}
console.log(duplicateString());


//closure
const closure=(a)=>{
    return  (b)=>{
          return a*b;
      }
}
console.log(closure(3)(4))

// merge two arrays or print unique num by comparing both array
const a = [{
  id: 1
}, {
  id: 2
}];
const b = [{
  id: 1
}, {
  id: 2
}, {
  id: 3
}];

const array3 = b.filter(obj => !a.some(({id}) => obj.id === id));

console.log(array3)

// pyramid
function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();
//output
// 1  
// 1  2  
// 1  2  3  
// 1  2  3  4  
// 1  2  3  4  5  

function count() {
    array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                document.write(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.write(current + ' comes --> ' + cnt + ' times');
    }

}

count();

// print count of repeated elements in array
const aarry =['Banana', 'April', 'May', 'Mark', 'May', 'Apple', 'May']
const funcList =()=>{
let listObj= aarry.reduce((item,val)=>
(item[val] = (item[val]||0)+1,item),{});
return listObj
}
console.log(funcList())

//output:
// {  
//   Banana: 1,  
//   April: 1, 
//   Mark: 1, 
//   May: 3 
// }


// object creation types
var obj ={};
var obj = {name:"aditya"}
const obj = new Object();
Object.assign({}, ['a','b','c']); // converted array to object{0:"a", 1:"b", 2:"c"}
['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {}) 
// { a: "a", b: "b", c: "c" }
console.log(obj);

/* Remove duplicates starts */
let arry = [10,20,30,10,15,20,25,40];
let newArray =[];
for(let i=0;i<arry.length;i++){
    if(!newArray.includes(arr[i])){
        newArray.push(arr[i]);
    }
    //(or)
    let findIndex = newArray.findIndex(item => item == arry[i]);
      if(findIndex == -1){
          newArray.push(arry[i]);
      }
}
console.log(newArray);
//(or)
  let duplicate=arr.filter((obj,index)=>{
        return arr.indexOf(obj) == index
    })
    console.log(duplicate);
    //(or)

    let removeDuplicates = [...new Set(arr)];
    console.log(removeDuplicates);
/* Remove duplicates ends */

// string charactor count starts
 let strg = "Hyderabad";
 let charCount = {};
 for(let i=0;i<strg.length;i++){
     if(charCount[strg[i]]){
     charCount[strg[i]]=charCount[strg[i]]+1
 }else{
     charCount[strg[i]]=1;
 }
 }
 console.log(charCount);
// string charactor count ends

// assending and dessending order starts
let array=[10,20,50,40,25,30];

//let sortArray = array.sort((a,b)=> a-b);//assending order
let sortArray = array.sort((a,b)=> b-a); // descending order
console.log(sortArray);


// program to count the number of vowels in a string

function countVowel(str) { 
    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;
    // return number of vowels
    return count;
}
// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

//(or)
// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]
function countVowel(str) {
    // initialize count
    let count = 0;
    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    // return number of vowels
    return count
}

// take input
const string1 = prompt('Enter a string: ');

const result = countVowel(string1);

console.log(result);

// Write a program to create an array and rotate the elements stored in the array by two positions.


// The program should first take the input of array size and then the elements of the array. Then program should rotate the elements of the array by 2.


// Example Input : 12345
// Output : 45123

// => [3, 4, 5, 1, 2]

// let k = 2
// => [4, 5, 1, 2, 3]

// let k = 1
// => [5, 1, 2, 3, 4]
//ANS:
// const rotateArray1 = function(nums, k) {

//   for (let i = 0; i < k; i++) {
//       nums.unshift(nums.pop());
//   }

//   return nums;
// }

// const rotateArray2 = function(nums, k) {

//   // reverse helper function
//   function reverse(arr, start, end) {
//     while (start < end) {
//       [arr[start], arr[end]] = [arr[end], arr[start]];
//       start++;
//       end--;
//     }
//   }

//   k %= nums.length;

//   reverse(nums, 0, (nums.length - 1));
//   reverse(nums, 0, (k - 1));
//   reverse(nums, k, (nums.length - 1));

//   return nums;
// }
const arr1 = [1,2,3,4,5];
const k = 2;
const rotateArray1 = (arr1,k) =>arr1.concat(arr1).slice(k, k+arr1.length);
console.log(rotateArray1(arr1,k));
  //(or)
 const rotateArray2 = (arr1, k) => arr1.slice(k).concat(arr1.slice(0, k));
  console.log(rotateArray2(arr1,k));

  //(or)
const arr2 = [1, 3, 6, 5, 4];
const rotatedArr = arr2.map((e, i) => arr2[arr2.length-i-1]);
console.log(rotatedArr);
// output:
//[ 3, 4, 5, 1, 2 ]

// var output = (function(x){
//     delete x;
//     return x;
// })(0);
// console.log(output); // output: 0

// the array will be going to stack overflow due to infinite loop fix this issue.
//var list = regList([]);
// var newFunction = function(){
//     var item = list.pop();
//     if(item){
//         newFunction();
//     }
// }
// console.log(newFunction());

// create a class and run program for given object
const calc = new Calculator();
// console.log(
//   calc
//   .init(2)
//   .add(2)
//   .mul(3)
//   .div(4)
//   .sub(2).result // 1
// );

//calc.alert();

function Calculator() {
  let result = 0;

  this.alert = function() {
    setTimeout(() => alert(result), 5000);
  };

  this.init = function(i) {
    this.result = i;
    return this;
  };

  this.add = function(i) {
    this.result += i;
    return this;
  };

  this.mul = function(i) {
    this.result = this.result * i;
    return this;
  };

  this.div = function(i) {
    this.result = this.result / i;
    return this;
  };

  this.sub = function(i) {
    this.result = this.result - i;
    return this;
  };
}

let res = calc.init(2).add(2).mul(3).div(4).sub(2).result;
console.log(res) // output :1

const calculator = new Calc();
let result = 0;
function Calc() {
    this.init = function(i) {
    this.result = i;
    return this;
  };
    this.add = function(i) {
    this.result = this.result + i;
    return this;
  };
  
    this.sub = function(i) {
    this.result = this.result - i;
    return this;
  };
  
    // this.result = function() {
    //     return this.result;
    // }
  }
  var resp = calculator.init(2).add(3).sub(2).result;

console.log(resp); // output:3



let a1 = [1,2,3,2,3,3,4,4];

 const b1 = a1.reduce((item,val) =>(item[val]=(item[val]||0)+1,item),{});
 console.log(b1);

  let name = "aditya siva";
const result = name.split(' ').reverse().join().toUpperCase()
console.log(result);

let strs = "aditya siva";
strs = strs.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});
console.log(strs.split(' ').reverse().join()) // output:= "Siva Aditya"


var arrList = [0, 1, [2, [3, [4, 5]]]]; 
const arrLists = arrList.flat(3);
//should write functional level also
console.log(arrLists);

//(or)
function flatten(ary) {
  var ret = [];
  for(var i = 0; i < ary.length; i++) {
      let value = ary[i];
      if(Array.isArray(value)) {
          ret = ret.concat(flatten(value));
      } else {
          ret.push(value);
      }
  }
  return ret;
}

console.log(flatten(["This is a string", 1, 2, [3], [4, [5, 6]], [[7]], 8, "[10, 11]"]));


// print 1 to 100 prime numbers
const isPrime = n => [...Array(n).keys()].slice(2).every(divisor => n % divisor !== 0)

const primeNumbers = [...Array(101).keys()].filter(isPrime)

console.log(primeNumbers)

// var a = 5;
// (function(){
//     console.log(a);
//     var a =10;
// })() // output :undefined
function x(){
  var a =7;
  return a;
}

console.log(typeof x); //-- output: function
console.log(typeof x()); //-- output:number
console.log(a); //-- output :error because var declared in block level

const array1 = [1,2,4];// add 3 value in the middle of 2 and 4 using splice or slice ;
array1.splice(2,0, 3); // output:[1,2,3,4]
console.log(array1)
const array = [1,22,3,3,3,3] // remove duplicates or repeated elements count
console.log(Object.assign({},array));



//duplicate array check
const obj = {};

for (let i = 0, len = things.thing.length; i < len; i++) {
  obj[things.thing[i]['place']] = things.thing[i];
}

things.thing = new Array();

 for (const key in obj) { 
   things.thing.push(obj[key]);
}

// 1)a = 20;
// console.log(a);
// var a;

// 2)b=10;
// console.log(b);
// let b; 

  // 3)let a =5;
  // if(a<5){
  // let b = " a lessthen 5";
  // }else{
  // let b = "b is grater then 5"; 
  // } 
  // console.log(b);


function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

let person = {
  name: "John"
};

greet.call(person, "Alice"); // Output: Hello, Alice! My name is John.


function add(a, b) {
  return a + b;
}

let numbers = [1, 2];

console.log(add.apply(null, numbers)); // Output: 3

let person1 = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

let greetPerson = person1.greet.bind(person1);

greetPerson(); // Output: Hello, my name is John.


for (var i=1; i <= 20; i++)
  {
      if (i % 15 == 0)
          console.log("FizzBuzz");
      else if (i % 3 == 0)
          console.log("Fizz");
      else if (i % 5 == 0)
          console.log("Buzz");
      else
          console.log(i);
  }


  // // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");

// const employees = [
//   { name: 'Alice', department: 'HR', salary: 50000 },
//   { name: 'Bob', department: 'Engineering', salary: 60000 },
//   { name: 'Charlie', department: 'HR', salary: 55000 }
// ];

// // Output -> { HR: ['Alice', 'Charlie' ], Engineering: ['Bob'] }
                             
// const dupArr = [{name: "pj", count: 2}, {name: "ram", count: 3}, {name: "head", count: 2}, {name: "shm", count: 4}]

// //const output = [{name: "pj", count: 2}, {name: "ram", count: 3},{name: "shm", count: 4}                             
const person = {
  firstName: "Helen",
  lastName: "Ryan",
  getFirstName: function () {
  console.log(this.firstName)
  },
  getArrowName: () => console.log(this.firstName)// undefined
};
const firstName = "kevin";
 
console.log(person.getFirstName());// undefined
console.log(person.getArrowName());// undefined
                   


// pyramid alphabets
let n = 4; // you can take input using prompt or change the value
let string = "";
let count = 0;
// External loop
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(count + 65);
    count++; // increment cause next alphabet
  }
  string += "\n";
}
console.log(string);


// sort the array by name or age
const array = [{name: 'xyz', age: 78}, {name: 'abc', age: 54}, {name: 'pqrs', age: 89}];
// sort by age
const sortByAge = array.sort((a,b)=> a.age - b.age);
console.log(sortByAge);

// sort by name
const sortByName = array.sort((a,b)=> a.name.localeCompare(b.name));
console.log(sortByName);

// print count of characters and aslo print not repeating charactors
const string = "aacababbce" // output: a4b3c2 need to solve

// print the largest count of character
var arr = [1,1,2,2,2,3,3,4,4,4,4,4,5,5];
    var charCount = {}; 
    var largest = 0; 
    var res;
    for (var v in arr) {
      charCount[arr[v]] = (charCount[arr[v]] || 0) + 1;
      if (charCount[arr[v]] > largest) { 
        largest = charCount[arr[v]]; // largest: 5 means 4 value repeated 5 times
        res = arr[v]; // output:4 means largest repeated number is 4
      }

    }
    var results = [];
    for (var k in charCount){
      if (charCount[k] == largest){
        //console.log(k + " occurs " + counts[k] + " times");
        results.push(k);
      }
    }
    console.log(res);//output:4
    console.log(results);//output:['4']

// club the array of object elements and show the count
const arrs = [{apple:2,orange:1,banana:3,grapes:1},
  {apple:2,orange:1,banana:3},
  {apple:2,orange:1,banana:3,grapes:2}];
  
function countData(){
return arrs.reduce((countObj,item)=>{
Object.keys(item).forEach((val)=>{
 if(countObj[val]){
     countObj[val] += item[val];
 }else{
     countObj[val] = item[val];
 }
})
return countObj
})

}         
console.log(countData());
//output:
//{ apple: 6, orange: 3, banana: 9, grapes: 3 }

const scoreList = [{Sno:1,score:20},
  {Sno:2,score:30},
  {Sno:1,score:50},
  {Sno:2,score:10}];
   
let newArr=[];
scoreList.map((item)=>{
let res = newArr.find((x)=>x.Sno == item.Sno)
if(res){
res.score += item.score;
}else{
newArr.push(item);
}
})

console.log(newArr);

//output:
//[ { Sno: 1, score: 70 }, { Sno: 2, score: 40 } ]


var arr = [1,2,3,2,1,2,1,1,2,3,4]
function val(arr) {
        for(i= 0; i < arr.length; i++){
            var count =0;
            for(j = 0; j < arr.length; j++) {
                if(arr[j] == arr[i]) {
                    count++;
                }
            }
            if(count > 1) {
                console.log("value ---  " + arr[i] + " counter --  "  + count);
            }
        }
    }
    val(arr);
    //output:
// value ---  1 counter --  4
// value ---  2 counter --  4
// value ---  3 counter --  2
// value ---  2 counter --  4
// value ---  1 counter --  4
// value ---  2 counter --  4
// value ---  1 counter --  4
// value ---  1 counter --  4
// value ---  2 counter --  4
// value ---  3 counter --  2

function reverseWords(str) {
  var string = str.split('').reverse().join('');
 return string.split(' ').reverse().join(' ').split(' ').reverse().join(' ');
}; 

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

// output : .god yzal eht revo spmuj xof nworb kciuq ehT

//Output [ ‘ehT’, ‘kciuq’, ‘nworb’, ‘xof’, ‘spmuj’, ‘revo’, ‘eht’, ‘yzal’, ‘.god’ ]

var employeeList=[{
  "name":"likitha",
  "age":30
  },{
  "name":"Roman",
  "age":30
  },{
  "name":"Ramesh",
  "age":25
  },{
  "name":"Prakash",
  "age":27
  }]
  
const filteredArr = employeeList.reduce((acc, current) => {
const x = acc.find(item => item.age === current.age);
if (!x) {
  return acc.concat([current]);
} else {
  return acc;
}
}, []);

console.log(filteredArr);

//output : [
//   { name: 'likitha', age: 30 },
//   { name: 'Ramesh', age: 25 },
//   { name: 'Prakash', age: 27 }
// ]

for(let a in [9,8,7]){ 
  console.log(a);
  }
//output :
// 0
// 1
// 2
var myVar = ['x', 'y', 'z'].map(a=> a + 'x')

console.log(myVar)
//output : [ 'xx', 'yx', 'zx' ]

var myVar = ['x', 'y', 'z']
myVar.forEach(a => console.log(a + 'x'));
//output: 
// xx
// yx
// zx

// closure example:
var x = 5;
function outer() {
var x = 10;
function inner() {
console.log(x);
}
return inner;
}
var finalResult = outer();
finalResult(); // output : 10
 
function x(){
  for (var i = 1; i <= 10; i++){   // if you remove = operator result will print  10 value 10 times 
    setTimeout(function (){
    console.log(i);
    }, i * 1000);
  }
  console.log("Learn")
}
x();
//output:
// Learn
// 11
// 11
// 11
// 11
// 11
// 11
// 11
// 11
// 11
// 11

// second large element 
const arr = ["a","a","b","b","b","b","c","c","a","a","a","a"]
 let largest = arr[0];
  let secondLargest = null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && (secondLargest === null || arr[i] > secondLargest)) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
   console.log(largest)
// second large element 
var secondMax = function (){ 
  var arr = [20, 120,122,122,121,253,111, 111, 215, 54, 78]; // use int arrays
  var max = Math.max.apply(null, arr); // get the max of the array
  arr.splice(arr.indexOf(max), 1); // remove max from the array
  return Math.max.apply(null, arr); // get the 2nd max
};
console.log(secondMax());

// splice:

// Purpose: Changes the contents of an array by removing existing elements and/or adding new elements. It modifies the original array.
// Syntax: array.splice(startIndex, deleteCount, item1, ..., itemX)
// startIndex: The index at which to start changing the array.
// deleteCount: (Optional) The number of elements to remove from startIndex. If 0, no elements are removed.
// item1, ..., itemX: (Optional) The elements to add to the array, starting at startIndex.
    const colors = ["red", "green", "blue", "yellow"];

    // Remove 1 element at index 1
    const removedColor = colors.splice(1, 1);
    console.log(removedColor); // Output: ["green"] (returns the removed element(s))
    console.log(colors);      // Output: ["red", "blue", "yellow"] (original array modified)

    // Insert elements without removing any
    colors.splice(1, 0, "purple", "pink");
    console.log(colors);      // Output: ["red", "purple", "pink", "blue", "yellow"]

    // Replace elements
    colors.splice(2, 2, "black"); // Remove 2 elements from index 2, add "black"
    console.log(colors);      // Output: ["red", "purple", "black", "yellow"]

//slice:
// Purpose: Extracts a portion of an array and returns a new array containing the selected elements. It does not modify the original array.
// Syntax: array.slice(startIndex, endIndex)
// startIndex: (Optional) The index at which to begin extraction. If omitted, extraction starts from index 0.
// endIndex: (Optional) The index before which to end extraction. The element at endIndex is not included. If omitted, extraction continues to the end of the array.

const fruits = ["apple", "banana", "orange", "mango"];
    const citrusFruits = fruits.slice(2); // Extracts from index 2 to the end
    console.log(citrusFruits); // Output: ["orange", "mango"]
    console.log(fruits);      // Output: ["apple", "banana", "orange", "mango"] (original array unchanged)

    const selectedFruits = fruits.slice(1, 3); // Extracts from index 1 up to (but not including) index 3
    console.log(selectedFruits); // Output: ["banana", "orange"]

// Var ,let ,const:
//-------------------
// var: internal declaration will move on to top and we can re declare and re initialize.
// let : block level scope and can't re declare but can re initialize.
// const: block level scope and can't re declare and can't re initialize.

// Template Literals:
// Template Literals provides some advantage of using back tick syntax like 
// 1) Better String Creation
// 2) No need to handle escaping
// 3)Multi line string
// 4)String interpolation
// 5)Expression
// 6)Complex Expression.

// Template Literals are very useful when we have complex string as it handles everything just inside back tick syntax.


//Arrow Function:
// Arrow function it doesn't have its own this, so when ever you call this it refer to its parent scope only

// Q. What are call, bind, and apply?

// Ans. call, bind, and apply are methods used to manipulate the value of 'this' in JavaScript functions.
// Call invokes a function with a specified 'this' value and arguments provided individually.

// Bind creates a new function that, when called, has its 'this' keyword set to the provided value.

// Apply invokes a function with a specified 'this' value and arguments provided as an array.

// All three methods are used to control the value of 'this' in a function.

// Example: myFunction.call(thisValue, arg1, arg2)

// Example: myFunction.bind(thisValue)

// Example: myFunction.apply(thisValue, [arg1, arg2])
// write a polyfill for the usestate ,use effect,usememo in react
//destructuring the object or array
// closure inner function
//increment and decrement of timer

// useRef coding examples
// useImperativeHandle
// debounce
// throttling
// create login screen using useRef
// create custom hooks
// Error
// Warning: Can't perform a React state update on an unmounted component.

// Solution
// You can declare let isMounted = true inside useEffect, 
// which will be changed in the cleanup callback, as soon as the component is unmounted. 
// Before state updates, you now check this variable conditionally:

// useEffect(() => {
//   let isMounted = true;               // note mutable flag
//   someAsyncOperation().then(data => {
//     if (isMounted) setState(data);    // add conditional check
//   })
//   return () => { isMounted = false }; // cleanup toggles value, if unmounted
// }, []);                               // adjust dependencies to your needs

// assending and dessending order ends
// A simple project in React

// Create a basic React app using create-react-app

// Add components and props to display data

// Use state and lifecycle methods to update and manage data

// Implement routing using React Router

// Integrate with APIs to fetch and display data

// Style components using CSS or a CSS framework like Bootstrap
//data.bmi=(data.weight/((data.height/100)*(data.height/100))).toFixed(2)
//https://www.youtube.com/watch?v=lL_KJTm-qCc  -- React Routing
//https://webpack.js.org/guides/code-splitting/
// gitHub links for react and javascript code practice
// https://github.com/tkssharma/CRACK_JS_INTERVIEWS
// https://github.com/Vasu7389/JavaScript-Interview-Questions
// https://github.com/Devinterview-io/javascript-interview-questions
// https://github.com/freeranger/react-bootstrap-tabs-demo
// https://github.com/Ashwin7mak/hackerrank-react-challenges
// https://github.com/GowriKrishnamurthy/React-sorting-articles
// https://github.com/AdityaSivaKumarM  -- me
// https://github.com/arjungautam1/Navbar-Demo
// https://github.com/sudheerj/javascript-interview-questions
// https://www.studytonight.com/javascript/
// https://redux.js.org/tutorials/typescript-quick-start
//https://github.com/gothinkster/react-redux-realworld-example-app.git
//https://github.com/KindsonTheGenius/product-app-react-ui/blob/master/src/components/Product.js  --- important
// https://github.com/PacktPublishing/Mastering-React-Test-Driven-Development-Second-Edition   ----- important
//https://github.com/arrlancore/nextjs-ssr-real-world-app-example
//https://github.com/adrianhajdin/project_cryptoverse - crypto currency Redux toolkit project
//https://github.com/sunil9813/Bidding-Website/tree/master - Bid web site
//https://www.curlap.com/support/developers/curl/docs/rte/latest/en/docs/en/api-ref/java-sql-Types.html
//git config --global http.sslVerify false
// import React from "react";
// const EmployeeProfile = ({ name, email }) => {
//   console.log("EmployeeProfile");
//   return (
//     <>
//       <p>Name:{name}</p>
//       <p>Email: {email}</p>
//     </>
//   );
// };

// export default function EmployeeRegForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   return (
//     <>
//       <label>
//         Name: <input value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Email:{" "}
//         <input value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <hr />
//       <EmployeeProfile name={name} />
//     </>
//   );
// }
// You're tasked with building a simple TODO list application in React. The application should allow users to:

import { object } from "prop-types";

 
// Add a new TODO item.
// Mark a TODO item as completed.
// Remove a TODO item.
// Your task is to implement the necessary components and logic to achieve this functionality.

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map((key) => [key, obj[key]]);
const map = { a: 1, b: 2, c: 3 };

const result = Object.values(map);

console.log(result);
// Print max array value:
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

// prijnt max or min values
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

		
//remove duplicates in string:
//with using method:
function wordsReverser(string){
return string.split("").reverse().join("").split(" ").reverse().join(" ")  
}

console.log(wordsReverser('New string, same results.'))

  var arr1 =[2,4,5,6,7]
  var arr2 =[9,4,5,8,1]
  //output: print unique values in both arrays
  const uniqueTags = [];
images.map(img => {
    if (uniqueTags.indexOf(img.tag) === -1) {
        uniqueTags.push(img.tag)
    }
});

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

//Remove duplicates starts
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
//Remove duplicates ends

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

var output = (function(x){
    delete x;
    return x;
})(0);
console.log(output); // output: 0

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
// not working below code
// let calc = new Calc();
// class calc {
//   constructor() { ... }
//   add(val){
//       return val
//   }
//   sub(){
//       return 4
//   }
//   result(){
//       return 3
//   }
// }
// var res = calc.add(3).add(4).result();

// console.log(res);
// assending and dessending order ends
// A simple project in React

// Create a basic React app using create-react-app

// Add components and props to display data

// Use state and lifecycle methods to update and manage data

// Implement routing using React Router

// Integrate with APIs to fetch and display data

// Style components using CSS or a CSS framework like Bootstrap
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
function pushZerosToEnd(arr, n)  
{  
    let count = 0; // Count of non-zero elements  
  
    // Traverse the array. If element encountered is non-  
    // zero, then replace the element at index 'count'  
    // with this element  
    for (let i = 0; i < n; i++)  
        if (arr[i] != 0)  
            arr[count++] = arr[i]; // here count is  
                                // incremented  
  
    // Now all non-zero elements have been shifted to  
    // front and 'count' is set as index of first 0.  
    // Make all elements 0 from count to end.  
    while (count < n)  
        arr[count++] = 0;  
}  
  
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

let original = "Hello World";
 let reversed = "";
 for (let i = original.length - 1; i >= 0; i--) {
 reversed += original[i]; 
 } 
 console. log(reversed);

		
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



const closure=(a)=>{
    return  (b)=>{
          return a*b;
      }
}
console.log(closure(3)(4))


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


const aarry =['Banana', 'April', 'May', 'Mark', 'May', 'Apple', 'May']
 
// {  
//   Banana: 1,  
//   April: 1, 
//   Mark: 1, 
//   May: 3 
// }
  var obj ={};
 var obj = {name:"aditya"}
 const obj = new Object();
 Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}
 ['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {}) 
// { a: "a", b: "b", c: "c" }
 console.log(obj);
const funcList =()=>{
let listObj= aarry.reduce((item,val)=>
(item[val] = (item[val]||0)+1,item),{});
return listObj
}
console.log(funcList())

//Remove duplicates starts
let arry = [10,20,30,10,15,20,25,40];
let newArray =[];
for(let i=0;i<arry.length;i++){
    if(!newArray.includes(arr[i])){
        newArray.push(arr[i]);
    }
    (or)
    let findIndex = newArray.findIndex(item => item == arry[i]);
      if(findIndex == -1){
          newArray.push(arry[i]);
      }
}
console.log(newArray);
(or)
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
// assending and dessending order ends
// A simple project in React

// Create a basic React app using create-react-app

// Add components and props to display data

// Use state and lifecycle methods to update and manage data

// Implement routing using React Router

// Integrate with APIs to fetch and display data

// Style components using CSS or a CSS framework like Bootstrap
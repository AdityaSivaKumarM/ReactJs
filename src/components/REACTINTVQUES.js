JavaScript
----------
1)What is hoisting
2)What is closure
3)
var x = 1;
if (function f() {}) {
    x += typeof f;
}
console.log(x);

Output
------
1undefined

4)
function myFunction() {
    var a = b = 3;
}
myFunction();
console.log("b:", b);
console.log("a:", typeof a !== 'undefined' ? a : "a is undefined");

Output
------
b: 3
a: a is undefined

5)
console.log(3 > 2 > 1);

Output : false

Exp :  3 > 2 is true and then true > 1(true is nothing but 1) so 1>1 : false

6)
const array = [1, 2, 34, 2, 3, 4, 4, 5];
//output: [34,5,4,3,2,1]

Output1
-------
const array = [1, 2, 34, 2, 3, 4, 4, 5];

// Step 1: Remove duplicates using a Set
const uniqueArray = [...new Set(array)];

// Step 2: Sort the array in descending order
const sortedArray = uniqueArray.sort((a, b) => b - a);

console.log(sortedArray); // Output: [34, 5, 4, 3, 2, 1]

Output2
-------
const array = [1, 2, 34, 2, 3, 4, 4, 5];
//output: [34,5,4,3,2,1];

const newArr = [] // [...new Set(array)];

for(let i=0;i<array.length;i++){
    // if(!newArr.includes(array[i])){
    //     newArr.push(array[i]);
    // }
    let findIndex = newArr.findIndex(item => item == array[i]);
    if(findIndex == -1){
        newArr.push(array[i]);
    }
}
const sortArr = newArr.sort((a,b) => b-a);
console.log(sortArr);


Other Interview
7)How to find characters count in given string(Hyderabad)
output
-------
let str = 'Hyderabadhbd';
let charCount = {};
for(let value of str){
    if(charCount[value]){
        charCount[value] = charCount[value] + 1;
    }else{
        charCount[value] = 1;
    }
}
console.log(charCount);

8)How to create span element and append to div tag when i click on click method
Output:
<body>
<div id="demo">
</div>
<div>
<input type='button' name='name' onclick='clickMtd()'value='Click'/>
</div>
<script>
function clickMtd(){
  let parentDiv = document.getElementById("demo");
  let spanTag = document.createElement('span');
  spanTag.innerText = 'I am Span';
  parentDiv.appendChild(spanTag);
}

</script>

Other Interview
---------------
9)What is the difference between regular function and arrow function
10)What is the difference between static method instance method
11)What is the difference between promises and async await 
12)what is the difference bwteen deep copy and shallow copy
13)What is the difference between spread operator and rest operator in javascript
14)
const user = {
name: "John",
regularFunction: function() {
console.log(this);
},
arrowFunction: () => {
console.log(this);
}
};
 
user.arrowFunction();
user.regularFunction();

Output :
-------
{
  name: 'Hanuamntu',
  normalMtd: [Function: normalMtd],
  arrowMtd: [Function: arrowMtd]
}
{}

15)
for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 0);
};
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 0);
};

Output
-------
3
3
3

0
1
2

Other Interview
---------------
16)What is the difference between Event Bhubbling and Event Capturing 
17)What is filter, reduce and map methods in javascript

18)What is the difference between regular function and arrow function
19)What is hoisting

Other Interview
----------------
20)What is callback
21)What is closure
22)how to get firstname, lastname and village from obj using destructingn one line
Ex : const obj = {
name:{firstName:"chiru",lastName:"gampala"},
address:{ birthPlace:{village:"ponduru"}}
}

Output:
-------
const { name: { firstName, lastName }, address: { birthPlace: { village } } } = obj;

console.log(firstName); // "chiru"
console.log(lastName);  // "gampala"
console.log(village);   // "ponduru"

23)How to replace normal key value with sub_type in below example
const a = [ {id:2,type:"text"},{id:2,type:"number"},{id:2,type:"radio"},{id:2,normal:"textArea"}];

Output:
const updatedArray = a.map(obj => {
  if (obj.hasOwnProperty('normal')) {
    const { normal, ...rest } = obj;  // Destructure to separate `normal` from other properties
    return { ...rest, sub_type: normal };  // Construct the new object with `sub_type`
  }
  return obj;  // Return the object unchanged if `normal` is not present
}); 

Other Interview
----------------
24)What is promises and promise methods explanation 
25)const str = "BANANA" display more than one char with count

Other Interview
---------------
26)What is ES6 Functionalities
27)What is Async and Await
28)What is Promise
29)What is the difference between Async, Await and Promise
30)What is the difference between Normal Function and Arrow Function
31)const [a, ...b, c] = [1,2,3,4,6];
32)input ->  ["olleH", "!!yad dooG"];
   output -> ["Hello", "Good day!!"];

Output :
//input ->  ["olleH", "!!yad dooG"];
//output -> ["Hello", "Good day!!"];

let arrStrs = ["olleH", "!!yad dooG"];
let outputStrs = [];
for(let i=0;i<arrStrs.length;i++){
    outputStrs.push(arrStrs[i].split('').reverse().join(''))
}
console.log(outputStrs);

//Default Methods
let str = 'Hyderabad';
let revStr = str.split('').reverse().join('');
console.log(revStr);

//Normal Manual Coding
let str1 = 'Hyderabad';
let revStr1 = '';
for(let i=str1.length-1;i>=0;i--){
    revStr1 = revStr1 + str1[i];
}
console.log(revStr1);


Other Interview
----------------
33)function outer() {
 
    var x = 10;
function inner() {
var y = 5;
console.log(x + y);
}
var x = 20;
return inner;
}
var innerFunc = outer();
InnerFunc()
34)const
arr = [1,2,3,4,5];
for(var i = 0; i < arr.length; i++) {
setTimeout(function() {
console.log(i); },1000); 
}








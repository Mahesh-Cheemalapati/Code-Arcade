## Code Arcade Solutions

You can use this as a resource while you are trying to get through with the Code Arcade challenges. Use this as a reference if you get stuck anywhere!

- Write a function that returns the sum of two numbers.

``
function add(param1, param2) {
    return param1 + param2; 
   }
let sum = add(4,6);
console.log(sum);
``

- Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

``
function centuryFromYear(year) {    
   const rem = year%100;
   const cent = parseInt(year/100);   
   if(rem){
       return cent +1;
   }
   else{
       return cent;
   }    
 }
``

- Given the string, check if it is a palindrome.

``
function checkPalindrome(inputString) { 
   let newStr= "";  
   let n = inputString.length-1;
   for (let i = n; i >=0; i--) {
       newStr += inputString[i];
   }
   if (inputString === newStr) {
       console.log(true); 
   }
   else {
       console.log(false);
   } 
 }
 checkPalindrome("racecar");
``
 
 - Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 
 ``
 function adjacentElementsProduct(inputArray) {
  let n = inputArray.length-1;
    let prevVal = 0;
    let tempVal = 0;
    for (let i = 0; i< n; i++) {
       tempVal = inputArray[i] * inputArray[i+1];  
       if(tempVal >= prevVal || i === 0){
        prevVal =  tempVal;
    }
  }
    return prevVal;
}
``

- Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

`` 
let cache = new Map();
function shapeArea(n) {
    if(n === 1){
       return 1;
    }    
    return shapeArea(n-1) + 4*(n-1);    
}
`` 

- Making array consecutive

``
function makeArrayConsecutive2(statues) {   
    statues = sort(statues);
    let prev = 0;
    let statuesNeeded = 0;
    statues.forEach((item, index)=>{        
        if(index === 0){
            prev = item;
        }else {
            statuesNeeded += item-prev -1;
            prev = item;
        }
    });
    return statuesNeeded;
}
``

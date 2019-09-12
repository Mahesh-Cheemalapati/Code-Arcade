## Code Arcade Solutions

>You can use this as a resource while you are trying to get through with the Code Arcade challenges. 
>The solutions have been provided in *Javascript*

- ***Write a function that returns the sum of two numbers.***

```  
function add(param1, param2) {       
  return param1 + param2;
  } 
  let sum = add(4,6); 
  console.log(sum);
```

- ***Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.***

```
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
```

- ***Given the string, check if it is a palindrome.***

``` 
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
```
 
- ***Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.***
 
 ```
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
```

- ***Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.***

```
let cache = new Map();
function shapeArea(n) {
   if(n === 1){
    return 1;
   }    
   return shapeArea(n-1) + 4*(n-1);    
}
``` 

- ***Making array consecutive***

```
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
  ```
   
- ***Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.***

```
function almostIncreasingSequence(arr) {
  var bad=0
  for(var i=1;i<arr.length;i++) if(arr[i]<=arr[i-1]) {
  bad++
  if(bad>1) return false
  if(arr[i]<=arr[i-2]&&arr[i+1]<=arr[i-1]) return false
  }
  return true
}
```
- ***Matrix Sum Element (CodeBots Room selection)***

``` 
function matrixElementsSum(matrix) {    
   let set = new Set();
   let count = 0;         
   for (let i = 0; i < matrix.length; i++) {
    let childArr = matrix[i];
    for (let j = 0; j < childArr.length; j++) {
      if(i === 0){
       if(childArr[j] === 0){
         set.add(j);    
       }
       else {
        count+= childArr[j];         
       } 
      }
       else{
       if(childArr[j] === 0 || set.has(j)){
       set.add(j);                 
       }
       else {
       count+= childArr[j];       
       }   
      }    
     }
    }
   return count;
}
```
- ***Given an array of strings, return another array containing all of its longest strings.***

```
function allLongestStrings(inputArray) {
   let oldLength = 0;
   let newArray = [];   
   for(let i=0; i<=inputArray.length-1; i++){
   let newLength = inputArray[i].length;
   if(oldLength<newLength){
      oldLength = newLength;
      newArray = [];
    }
   if(inputArray[i].length === oldLength){
      newArray.push(inputArray[i]);
    }
   }
     console.log(newArray);
     return newArray;
}
```

- ***Given two strings, find the number of common characters between them.***

```
function commonCharacterCount(s1, s2) {
     let count = 0
     for(let char of s1){
              let index = s2.indexOf(char);
              if(index != -1){
              let s3 =  s2.split('');
              s3.splice(index, 1);
              s2 = s3.join('');
              count++;
            }
          }    
          return count;    
}
```

- ***Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.***

```
function isLucky(n) {
    let val = n.toString();
    let newVal = (val.length)/2;
    let i=0;
    let firstHalf=0;
    let secondHalf=0;
    for(char of val){
        if(i<newVal){
         firstHalf+= parseInt(char);
        }
        else{
            secondHalf+= parseInt(char);
        }
     console.log(i,char);
     i++;
 } 
     if(firstHalf === secondHalf){
         console.log(true);
         //return true;      
     }
     else{
         console.log(false);
        // return false;
     }
 }
```

> Will update new solutions soon (weekly)

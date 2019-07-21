/*
Given a sequence of integers as an array, 
determine whether it is possible to obtain a strictly increasing sequence 
by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
*/
function almostIncreasingSequence(arr) {
    var bad=0;
     for(var i=1;i<arr.length;i++) 
     
     if(arr[i]<=arr[i-1]) {
       bad++;
       
       if(bad>1) 
       console.log(false);
       //return false
       
       if(arr[i]<=arr[i-2]&&arr[i+1]<=arr[i-1]) 
       console.log(false);
       //return false
     }
     console.log(true);
     //return true;
   }
   let arr = [1,3,2];
   almostIncreasingSequence(arr);
   
   
/*
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first 
half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
*/


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
 let n = 1230;
 isLucky(n)
 
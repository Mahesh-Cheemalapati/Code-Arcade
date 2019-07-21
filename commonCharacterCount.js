/*
Given two strings, find the number of common characters between them.
*/

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
    console.log(count);
    //return count;    
}
let s1 = "aabcc", s2 = "adcaa";
commonCharacterCount(s1,s2);
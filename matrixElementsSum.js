function matrixElementsSum(matrix) {
    
    let set = new Set();
     let count = 0;
for (let i = 0; i < matrix.length; i++) {

 let childArr = matrix[i];

 for (let j = 0; j < childArr.length; j++) {  
         if(i === 0){
             if(childArr[j] === 0){
                     set.add(j);                 
             }else {
                 count+= childArr[j];                     
             } 
         }else{
              if(childArr[j] === 0 || set.has(j)){
                     set.add(j);              
             }else {
                 count+= childArr[j];       
             }   
         }      
 }
}
console.log(count);
 //return count;
}
let matrix = [[0, 1, 1, 2], 
              [0, 5, 0, 0], 
              [2, 0, 3, 3]];
matrixElementsSum(matrix);

/* Given an array of integers, find the pair of 
adjacent elements that has the largest product 
and return that product. */

function adjacentElementsProduct(inputArray) {
    let n = inputArray.length-1;
    //taking prevVal to store product of two elements
      let prevVal = 0;
    //taking tempVal to store product of next two elements and compare
      let tempVal = 0;
      for (let i = 0; i< n; i++) {
         tempVal = inputArray[i] * inputArray[i+1];
         if(tempVal >= prevVal || i === 0){
          prevVal =  tempVal;
        }
    } 
    console.log("Product of largest two adjacent elements:",prevVal); 
    //return prevVal;
  }

  let inputArray = [3,4,2,-5,7,8,10,9];
  adjacentElementsProduct(inputArray);
  
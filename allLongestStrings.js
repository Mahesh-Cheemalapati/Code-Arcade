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
let inputArray = ["aba", "aa", "ad", "vcd", "aba"];
allLongestStrings(inputArray);
/* Given the string, check if it is a palindrome.*/
function checkPalindrome(inputString) {
    // declaring a newStr variable to strore the inputString after reversing
    let newStr= "";
    // declaring n to run the for loop from the last character of the string
    let n = inputString.length-1;
    for (let i = n; i >=0; i--){
    // inserting the characters from input string into newStr
        newStr += inputString[i];
    }
    // checking if the newStr and inputString are the same
    if (inputString === newStr) {
        console.log(true);
        // return true;
    }
    else {
        console.log(false);
       // return false;
    }
}
checkPalindrome("racecar");

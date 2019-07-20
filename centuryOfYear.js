/*Given a year, return the century it is in. 
The first century spans from the year 1 up to 
and including the year 100, the second - from 
the year 101 up to and including the year 200, etc
 */

function centuryFromYear(year) {
    // checking the remainder
    const rem = year%100; 
    // parsing the constant to a variable because we are using a variable in the calculation
    const century = parseInt(year/100); 

    if(rem){
        console.log(century +1);
    //  return century +1;
    }
    else{
        console.log(century);
    //  return century;
    }
}
centuryFromYear(2019);

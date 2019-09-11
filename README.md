## Code Arcade Solutions

You can use this as a resource while you are trying to get through with the Code Arcade challenges. Use this as a reference if you get stuck anywhere!

1. Write a function that returns the sum of two numbers.

>function add(param1, param2) {
>    return param1 + param2; 
>   }
>let sum = add(4,6);
>console.log(sum);

2. Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

>function centuryFromYear(year) {
    
>   const rem = year%100;
>   const cent = parseInt(year/100);   
>
>   if(rem){
>       return cent +1;
>   }
>   else{
>       return cent;
>   }
>    
> }

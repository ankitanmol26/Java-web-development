//function for adding two numbers
// function add(a,b){
//     return a + b 
// }
// let ans=add(7,7);
// console.log(ans)
//------------------------------------
//for checking even or odd
// const even = (n) =>{
//     if (n%2==0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }
// ans = even(2);
//---------------------------------------
//finding the greatest no 
// const large = (a , b , c )=>{
//     if(a > b && a > c){
//         console.log("the greatest number is :" + a)
//     }else if (b > a && b > c ){
//         console.log("the greatest no is :" + b)
//     }else{
//         console.log("the greatest no is :" + c)
//     }
// }
//  ans = large(7 , 8 , 9)
//----------------------------------------------

// //reversing a string 
// function reverseString(str){
//     let result ="";
//     for (const char of str){
//         result = char + result;
//     }
//     return result;
// }
// console.log(reverseString("hello"));
//another one
// function reverseString(str){
//     let reverse = "";
//     for(let i = str.length-1; i >=0 ; i--){
//         reverse = reverse + str[i];
//     }
//     return reverse;
// }
// console.log(reverseString("ankit"));
//-------------------------------------------------
//Count vowels in a string.
// function countVowels(str){
//     let count = 0;
//     const vowels = "aieouAEIOU";

//     for(const char of str){
//         if (vowels.includes(char)){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countVolwes("hello world"));
//--------------------------------------------------
//factorial
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// }
// let ans = factorial(5);
// console.log(ans); // 120
//or
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // 120
//---------------------------------------------------
//count vowels 
// function countVowels(str){
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("ANKIT"))
//--------------------------------------------------------------
//finding the max of the array
// function findMax(arr){
//     let max = arr[0];
//     for (let i = 1 ; i < arr.length; i++){
//         if (arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// const numbers = [10,20,30,40];
// console.log(findMax(numbers));

//-=-------------------------------------------------------
//calculating sum by using rest parameters
// function sum(...numbers){
//     let total = 0;
//     for (let num of numbers){
//         total = total + num;
//     }
//     return total;
// }
// console.log(sum(10,20));
//--------------------------------------------------------
//callback function example 
// function greet(name, callback){
//     console.log("hello, " + name);
//     callback();
// }
// function sayBye(){
//     console.log("goodbye");
// }
// greet ("ankit", sayBye);
//---------------------------------------------------
//Create a higher-order function that takes another function and executes it.
// function execute(callback){
//     callback();
// }
// function sayHello(){
//     console.log("Hello , World!");
// }
// execute(sayHello);

//thats it about the functions 
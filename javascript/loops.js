// while loop: A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.
// for loop: A for loop provides a concise way of writing the loop structure. Unlike a while loop, for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.
// do while: A do-while loop is similar to while loop with the only difference that it checks the condition after executing the statements, and therefore is an example of Exit Control Loop.

//while loop
// while (condition) {
//     // code block to be executed
//   }
// let i = 0;
// while(i >= -500){
//     console.log('hi',i);
//     i--;
// }
//-------------------------------------------------------------------
// for-loop
// for(i=1;i<=5;i++){
//     console.log('for i',i);
// }
// console.log('after for loop i',i);
// while(i<=100){ 
//      console.log('while i',i);
//     i++;
//  }
//------------------------------------------------------------------
//do-while loop
// let i=1; //intitialization
// do{
//     console.log("i:",i);    
//     i++; // incriment

// }while(i<=5); // condition 
//------------------------------------------------------------
//for-of loop
// let str = "adharvasoftlabs";
// let arr = ['puneeth','siva','jyothi','ruchita'];
// var count=0;
// for (var i of arr) {
//     console.log(count,i);
//     count++;
// }

// let listOfNames = () =>{
//     let count=1;
//     for (var i of arr) {
//     console.log(count,i);
//     count++;
// }};listOfNames()
//---------------------------------------------------------------------------------
//for in loops
let obj = {name:'puneeth',age : 23,place : 'banglore',address:{town:'rayachoty',dist:'annamayya',state:'andhra pradesh',pincode:516269}}
// for (var i in obj) {
//     console.log('i:',i);
// }
// console.log(obj);
// practice question-1 print even numbers 1 to  100;
// for(a=1;a<=100;a++){
//     if(a%2===0){
//     console.log(a);

//     }    
// }
//practice question-2 number guessing game
// let gameNum = string(25);
// let enterNum = prompt('enter a guessing number:');
// while(gameNum !== enterNum){
//     enterNum = prompt('try again a new number:');
// }
// prompt('congratulations you have entered correct number');
//calculate first of n numbers
// let sum = 0;

// for(i=1;i<=100;i++){
//     sum = sum + i;
// }
// console.log('sum =',sum);
// console.log('execution completed');
 
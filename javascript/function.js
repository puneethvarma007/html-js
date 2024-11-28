// //function is used to perform a particular action.
// //first we need to define a function and then we need to call that function for some action.  
// function fun1(){
//     console.log('this is js function');
//     console.log('this is also js function');
// }
// fun1()
// function fun2(msg){ // input - parameter
//     console.log(msg);
// }
// fun2(); // it is undefined because there is no input to print. 
// fun2('this is js'); // output - argument here the value is given so it prints the value.

// function sum(z , x){
//     console.log(2 + 4); // if z(str),x(num) values are added(+)it considered as string. other than any arithmetic operation(-,*,/) it is considered as NAN(not a number) 
//     return z + x; // after return keyword the next lines of code doesn't execute.
// }
// // function method or fun expr ---------
// let ab = function(x,y){
//     var x =5, y = 6 ;
//     return x+y;
// }
// console.log('this is ab function-',' '+ab());
// // anonymus function ---
// let gum = function(x,y){
//     if(x>y){
//         console.log("x is greater than y");
//     }else{
//         console.log("y is greater than x");
//     }
// }
// gum(10,5);
// //immediately invoked function expression-----
//  (function(){
//     console.log("Hello immediately!");
// })();
// (function(){
//     console.log("bye bye!");
// })();
// //arrow function
// let a = (x,y) => {
//     console.log(x+y);
//  }
// a(2,4)
// let b = (c,d) =>{
//     console.log(c+d);
// }
// b(5,10)
// function fun(){
//     console.log('heloo');
// }
// console.log(fun);
// console.log(typeof(fun));
// //higher order function 
// function outer(x){
//     var x = 5;
//     console.log(x);
//         function inner(y){
//         console.log('y');
//         console.log('inner function :',x);
//             function inner1(z){
//             console.log('inner1 function :',x);
//             console.log('z');
//         }
//         inner1()        
//      }
//     inner()
// }
// outer()


// function top1() {
//     let x=10,y=15;z=20;
//     function in1() {
//         console.log(x)
//     }
//     in1()
//     function in2() {
//         console.log(y)
//     }
//     in2()
//     function in3() {
//         console.log(z)
//     }
//     in3()
// }
// top1()
// count vowels
function countVowels(str){
    let count = 0;
    for (const element of str) {
        if(element ==='a' || element === 'e' || element === 'i' || element=== 'o' || element === 'u'){
            count++;
        }   
        
    }
    console.log(count);
}
countVowels('pst');
//arrow fun
countVowels = (str) =>{
    let count = 0;
    for (const element of str) {
        if(element ==='a' || element === 'e' || element === 'i' || element=== 'o' || element === 'u'){
            count++;
        }   
    }
    console.log(count);
}
countVowels('aeiou');
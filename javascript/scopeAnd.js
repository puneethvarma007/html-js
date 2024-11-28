//scoping 3 types
// const a=5;
// function fun1(){
//     let a=7;
//     if(true){
//         let a=6;
//         console.log('fun scope',a);
//     }
//     console.log('block scope',a)
// }
// console.log('global scope',a);
// fun1()
// ---------------------------------------------------------
// global scope
// const a=1;
// function fun1(){
//     console.log('global',a);
//     if(true){
//         console.log('global',a);
//     }
// }
// console.log('global',a);
// fun1()
// --------------------------------------------
// // local scope
// function fun(){
//     const a=1;
//     console.log('fun',a);
//     {
//         b=1;
//         console.log('fun',a);
//         console.log('block',b);
//     }
// console.log('block',b);
// }
// fun();
// console.log(a);
// ------------------------------------------------------
// // // block scope
//     var d=10;
//     let e=11;
//     const f=12;
//     {
//         var a =1;
//         let b =1;
//         const c = 1;
//         console.log('var', a);
//         console.log('let', b);
//         console.log('const',c);
//         console.log('global var',d);
//         console.log('global let',e);
//         console.log('global const',f);


//     }
// console.log('var',a);
// console.log('let', b);
// console.log('const',c);
// ---------------------------------------------------
//hoisting
//  console.log(a);
// var  a = 1;
// fun1()
// function fun1(){
//     console.log('hello there !');
// }
// fun()
// var fun =()=>{console.log('throws a TypeError: fun is not a function')}
// fun()
//--------------------------------------------------------------------------------------------
// fun1()
// let fun1 = () =>{console.log('throws a Reference error: Cannot acces "fun1" before intialization')}
//fun1()
//------------------------------------------------------------------------------------------------
// a="5rrr";
// b=6;
// c=a*b;
// d=a+b;
// //c++;
// console.log(c);
// console.log(d);
//-------------------------------------------------------------------------------
// a='5';
// b='6';
// if(a===5 || b===6){
//     console.log('matched');
// }
// else{
//     console.log('not matched');

// }
// function geta() {
//     return 5;
// }
// function getb() {
//     return geta()
//     return 6;
// }
//console.log(geta() + getb());
//-----------------------------------------------------
// a=1;
// b=2;
// // c=3;
// function getsome(a,b,c=0){
//     return a+b+c;
// }
// console.log(getsome(a,b));


// function add(a,b,c){
//     if(c === undefined){
//         return sub(a,b);

//     }
//     else{
//         return a+b+c;
//     }

// }

// function sub(a,b){
//     return a+b;
// }
// let res = add(10,20)
// console.log(res);
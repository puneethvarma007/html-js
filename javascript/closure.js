//simple closure 
// function outer(){
//     let count = 0;
// 	return function inner(){
//         count++;
//         console.log(`count:${count}`);
//     }
// }
// const count = outer();
// count();
// count();
// count();
// count();
// count();
//-----------------------------------------------------
//
// function outer() {
//     let count = 0;
// 	count=count+1;
// 	console.log(count);
// }
// outer()//1
// outer()//1
// outer()//1
//-----------------------------------------------------
// function outerfun(){
// 	let x = 0;
// 	return function innerfun(){
// x = x + 1;
// 	console.log(x);
// 	}
// }
// inner=outerfun();
// inner()//1
// inner()//2
// inner()//3


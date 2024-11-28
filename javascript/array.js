//let a = ['banglore','hyderabad','chennai','pune','mumbai'];
//a.forEach((val,ind,arr) => console.log(val.toUpperCase(),ind,arr));
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
//arr.forEach((val,ind) => console.log(`value square of ${ind} : `,val**2));
//calculateSquare = (num) => {console.log(`value of squares`,num**2)};
//arr.forEach(calculateSquare);

// // map-methods
// let arrSquare = arr.map((arr => arr**2));
// console.log(arrSquare);
// let arrCube = arr.map((arr => arr**3));
// console.log(arrCube);
// let arr1 = arr.map((arr => arr));
// console.log(arr1);

// // filter method 
// let arrEven = arr.filter((val =>{
//     return val % 2 === 0;
// }));
// console.log(arrEven);
// let arrOdd = arr.filter((val => {
//     return val % 2 !== 0;
// })); 
// console.log(arrOdd);
// // array reduce 
// let arrSum = arr.reduce(((prev,curr) => {
//     return prev + curr;
// }));
// console.log(arrSum);

// let arrGreater = arr.reduce(((prev,curr) => {
//     return prev < curr ?  prev : curr;
// }));
// console.log(arrGreater);

// problem 1:
// studArr = [12,23,45,66,89,92,95,96,97,98]
// let topArr = studArr.filter(((arr)=>{
//     return arr > 90;
// }));
// let bottomArr = studArr.filter(((arr)=>{
//     return arr < 90 && arr > 40;
// }));
// let failArr = studArr.filter( arr => {
//     return arr < 40;
// }); 

// console.log(`outstanding students marks ${topArr}`);
// console.log(`normal students marks ${bottomArr}`);
// console.log(`legendary students marks ${failArr}`);

// let n = prompt('enter a number');

// let arrr = [];
// for(i=1; i<=n ; i++){
//     arrr[i-1]=i;
// }
// console.log(arrr);

// reverse an array

// let a = [99999999,11757498534979371,1,2,39999,4,5,699,7,8,9,10];
// console.log(a);

// // n = (445454n)
// // console.log(n);

// b = (a.sort((val,i)=>{
//     return (val) - (i) 
// }))
// console.log('b',b);
// c = [(b.pop()),(b.pop())].sort((val,i)=> (val-i))

// console.log('c',c);

// reverse a string
// let str = ['a','d','h','a','r','v','a','S','o','f','t','L','a','b','s'];
// let str = 'AdharvaSoftLabs';
// let rev = str.split('').reverse().join('')
// console.log(rev);


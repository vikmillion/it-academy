// function myFun(params) {
//     console.log(myFun);
// }
//функ самовызывающаяся
// (
//     function () {
//         console.log("Hello");
//     }
// )();

// const myFun = x => {
//     console.log("Outside", x);

//     return y => {
//         console.log("Inside", y);
//     }
// }
// myFun(2)(55);


// const sum = x => {
//     return y => {
//         return x + y;
//     }
// } 

// const first = sum(3);
// const second =sum(5)

// console.log(first(2));
// console.log(second(3));


// const myFun =(x=0, y=0)=>{
// console.log(" Test", x+y);
// }
// myFun();
// -------------
// const array = [4,5,6,7,8,9,10,5,6,7];

// const newArray =[];
// array.forEach(item=>{
// if(!newArray.includes(item)){
//     newArray.push(item);
// }
// });
// console.log(newArray);
//---------------------

// const array=[];
// const res=[];
// const count=5;
// for (let i = 1; i < count+1; i++) {
//  res.push(i.toString().repeat(i));

// }
// console.log(res);
//------------------------
// const sum= x=> y => xx => x+y+xx;

// const res = sum(2)(3)(5);

// console.log(res);
//-----------------------------


// const res = x => {
//     let num = true;
//     for (let i = 2; i < x; i++) {
//         if (x % i === 0) {
//             num = false;
//             break;
//         }
//     } console.log(num);
// }
// console.log(res(2));
//-----------------------------

// const startDiv = document.getElementById('start');
// // startDiv.append(newDiv);
// let start = 0;
// const finish = 10;
// const superDiv = div => {
//     const newDiv = document.createElement('div');
//     start++;
//     div.append(newDiv);
//     if (start < finish) {
//         superDiv(newDiv);
//     }
// }
// superDiv(startDiv);


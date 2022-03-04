// setTimeout(() => {
//     console.log('Hello :>> ');
// }, 1500);
// const myInterval =setInterval(() => {

//     console.log("Hello :>> ");
// }, 1000);

// const timeOut = setTimeout(() => {
//     clearInterval(myInterval);
// console.log('clear :>> ');
// }, 5000);
// for (let i = 0; i <5; i++) {
//     setTimeout(() => {
//      console.log('i :>> ', i);
//  },i*1000)
// }

// const myFn = (x, y) => {
//   for (let i = x; i < y + 1; i++) {
//     setTimeout(() => {
//       console.log("i :>> ", i);
//     }, i * 1000);
//   }
// };
// myFn(2, 7);

// const myFn2 = (x, y) => {
//     let temp = x;
//     const myInter = setInterval(() => {
//         console.log('temp :>> ', temp);
//         temp++;
//         if (temp === y) {
//             clearInterval(myInter);
//         }
//     }, 1000);
// };
// myFn2(2, 7);

// setTimeout(() => {
//     console.log('object :>> 1');
// }, 2000);

// setTimeout(() => {
//     console.log('object :>> 2 ');
// }, 1000);

// setTimeout(() => {
//     console.log('object :>> 3');
// }, 1500);

// setTimeout(() => {
//     console.log('object :>> 1');
//     setTimeout(() => {
//         console.log('object :>> 2 ');
//         setTimeout(() => {
//     console.log('object :>> 3');
// }, 1500);
// }, 1000);
// }, 2000);

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const api_response = true; //true or null
//         console.log("Promise");
//         if (api_response) {
//             resolve({ api_response, x: 'x' });
//         }
//         else reject()
//     }, 2000);
// })
//     .then((response) => {
//         console.log("Success", response);
//         return "1 st then";
//     })
//     .then((res) => console.log("Second :>> 2", res))
//     .catch(() => console.log('Error'))
//     .finally(() => console.log('funally'));

const first = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("object :>> 1");
      resolve();
    }, 1500);
  });
const second = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("object :>> 2");
      //resolve();
        reject();
    }, 1000);
  });
const third = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("object :>> 3");
      resolve();
    }, 2000);
  });

// first()
//   .then(() => second())
//   .then(() => third())
//   .catch(() => console.log("Error"));

// Promise.all([first(), second(), third()])
//   .then(() => console.log("End"))
//   .catch(() => console.log("Error"));
Promise.race([first(), second(), third()])
  .then(() => console.log("End"))
  .catch(() => console.log("Error"));

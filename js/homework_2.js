// 1--------------------------------------------------------

function chess(x, y) {
  const array = [];
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (i % 2 == 0) {
        array.push("&#9728; ");
      } else {
        array.push("&nbsp;&#9728;");
      }
    }
    array.push("<br>");
  }
  return array.join("");
}
let inputRow = document.querySelector(".hw_2-1_input-1");
let inputColumn = document.querySelector(".hw_2-1_input-2");

document
  .querySelector(".hw_2-1_button")
  .addEventListener(
    "click",
    () =>
      (document.querySelector(".hw_2-1_output").innerHTML = chess(
        inputRow.value,
        inputColumn.value
      ))
  );
//2----------------------------------------------------
const fact = (x) => {
  let fact = 1;
  for (let i = 1; i <= x; i++) {
    fact *= i;
  }
  return fact;
};
// fact(4);
let inputFact = document.querySelector(".hw_2-2_input-1");
document
  .querySelector(".hw_2-2_button")
  .addEventListener(
    "click",
    () => (document.querySelector(".hw_2-2_output").innerHTML = fact(inputFact.value))
  );
//3--------------------------------------------------------
const array2 = [10, 5, 9, 7, 3, 7, 4, 2, 6, 8];

function buble(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log("array :>> ", array);
  return array;
}
buble(array2);

document
  .querySelector(".hw_2-3_button")
  .addEventListener(
    "click",
    () =>
      (document.querySelector(".hw_2-3_output").innerHTML = buble(
        array2.join(" ")
      ))
  );

//4-----------------------------------------------------------

// let size = 120;
let size = document.querySelector(".hw_2-4_input");
// Number(size);
let unitStr = document.getElementById("unit");
console.log("size :>> ", +size.value);

const unit = (str) => {
  let res = 0;
  switch (str) {
    case "kb":
      return (res = size.value * 1024);
    case "mb":
      return (res = size.value * 1024 * 1024);
    case "gb":
      return (res = size.value * 1024 * 1024 * 1024);

    default:
      return "I don't now";
  }
};
console.log("unit :>> ", unit(unitStr));
document
  .querySelector(".hw_2-4_button")
  .addEventListener(
    "click",
    () =>
      (document.querySelector(".hw_2-4_output").innerHTML = unit(unitStr.value))
  );

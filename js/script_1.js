//1
const str = "123456";
const reversRes = str.split("").reverse("").join("");
console.log("reversRes :>> ", reversRes);
document
  .querySelector(".button-1")
  .addEventListener(
    "click",
    () => (document.querySelector(".hw-1_1").innerHTML = reversRes)
  );
//2
const strInclude = "http://127.0.0.1:5500/index.html";
const includeHttp = strInclude.includes('http://', 0);
const includeHtml = strInclude.includes('.html', -1);
console.log('includeHttp :>> ', includeHttp);
console.log('includeHtml :>> ', includeHtml);

document.querySelector('.button-2').addEventListener('click', () =>
    document.querySelector('.hw-1_2').innerHTML = 'http://  first include  ..' + includeHtml+ '  and  .html last include .. '+ includeHtml
);
// 3
const week_1 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const input = document.querySelector('.input_1');
const week = (day) => {
    switch (day) {
        case 1: return "понедельник";
        case 2: return "вторник";
        case 3: return "среда";
        case 4: return "четверг";
        case 5: return "пятница";
        case 6: return "суббота";
        case 7: return "воскресенье";
        default: return "куку, такого дня недели еще нет";
    }
}


document.querySelector('.button-3').addEventListener('click', () => {
    console.log('day :>> ',input.value);
    document.querySelector('.hw-1_3').innerHTML = week(3);
});

const nameDay = week_1.map((prev, item, index) => {
    console.log('index :>> ', index[5-1]);
})

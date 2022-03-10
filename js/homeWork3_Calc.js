const calc = document.querySelector(".calc");
const result = document.querySelector("#result");

calc.addEventListener("click", function (event) {
  if (!event.target.classList.contains("calc__btn")) return;

  let value = event.target.innerText;

  switch (value) {
    case "C":
      result.innerText = "";
      break;

    case "=":
      if (result.innerText.search(/[^0-9*/+-]/im) != -1) return;  
      result.innerText = eval(result.innerText).toFixed(2);
      break;

    default:
      result.innerText += value;
  }
});

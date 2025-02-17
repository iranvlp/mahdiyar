const operButtons = document.querySelectorAll(".oper_button");
let beforeNumber = null,
  currentNumber = "",
  currentOperator;
operButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const display = document.querySelector(".result_text");
    const id = e.target.id;
    console.log(id);
    if (id === "=") {
      if (currentOperator && beforeNumber) {
        console.log(currentOperator, beforeNumber, display.innerText);
        if (currentOperator === "x") {
          display.innerText = +beforeNumber * +display.innerText;
        } else if (currentOperator === "+") {
          display.innerText = +beforeNumber + +display.innerText;
        } else if (currentOperator === "divide") {
          display.innerText = +beforeNumber / +display.innerText;
        } else if (currentOperator === "-") {
          display.innerText = +beforeNumber - +display.innerText;
        }
      }
      currentOperator = null;
      currentNumber = display.innerText;
      beforeNumber = null;
    } else if (id === "clear") {
      display.innerText = 0;
      currentNumber = "";
      beforeNumber = null;
      currentOperator = null;
    } else if (id === "x" || id === "-" || id === "+" || id === "divide") {
      currentOperator = id;
      beforeNumber = display.innerText;
      currentNumber = "";
      console.log(beforeNumber);
    } else if (id === "toggle") {
      currentNumber = currentNumber * -1;
      display.innerText = currentNumber;
    } else if (id === "%") {
      currentNumber = currentNumber * 0.01;
      display.innerText = currentNumber;
    } else if (id === ".") {
      if (!String(display.innerText).includes(".")) {
        currentNumber = currentNumber + ".";
        display.innerText = currentNumber;
      }
    } else {
      // number
      console.log(currentNumber, id);
      currentNumber = currentNumber + id;
      display.innerText = currentNumber;
    }
  });
});
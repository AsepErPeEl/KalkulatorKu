const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";
let operator = "";
let operand1 = null;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value)) {
      // Kalau yang diklik angka
      current += value;
      display.value = current;
    } else if (value === "C") {
      current = "";
      operator = "";
      operand1 = null;
      display.value = "";
    } else if (value === "=") {
      if (operator && operand1 !== null) {
        const result = eval(`${operand1} ${operator} ${current}`);
        display.value = result;
        current = result;
        operand1 = null;
        operator = "";
      }
    } else {
      // Kalau operator
      operator = value;
      operand1 = current;
      current = "";
    }
  });
});

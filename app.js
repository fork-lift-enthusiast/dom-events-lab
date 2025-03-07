/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/
let equation = [];
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
  if (
    ["*", "/", "-", "+"].includes(equation[equation.length - 1]) &&
    event.target.classList.contains("operator")
  ) {
    return;
  }

  display.innerText += event.target.innerText;

  equation.push(event.target.innerText);
  if (event.target.innerText === "=") {
    console.log(equation.join(""));
    equation.pop();
    display.innerText = `${eval(equation.join(""))}`;
    equation = [];
  }
  if (event.target.innerText === "C") {
    display.innerText = "";
    equation = [];
  }
});

/*-------------------------------- Functions --------------------------------*/


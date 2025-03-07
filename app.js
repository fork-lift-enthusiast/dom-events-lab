/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let equation = [];
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
  // checks if the last item in the equation array, and the click event are operators and skips the rest of the code if they are
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

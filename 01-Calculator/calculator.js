let result = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");

function rerender() {
  screen.innerText = buffer;
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
    
  } else {
    if (previousOperator !== "="){
      buffer += value;  
      
    } else {
      console.log(5);
      buffer = value;
      previousOperator = null;
    }
  }
}

function handleMath(value) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);
  if (result === 0) {
    result = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    result += intBuffer;
  } else if (previousOperator === "-") {
    result -= intBuffer;
  } else if (previousOperator === "×") {
    result *= intBuffer;
  } else {
    result /= intBuffer;
  }
}

function handleSymbol(value) {
  switch (value) {

    case "C":
      buffer = "0";
      result = 0;
      break;

    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = "=";
      buffer = +result;
      result = 0;
      break;

    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
      
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(value);
      break;
  }
}

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
  });
}

init();
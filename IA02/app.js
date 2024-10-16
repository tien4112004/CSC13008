document.getElementById("calculate").addEventListener("click", function () {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  const resultField = document.getElementById("result");
  const messageField = document.getElementById("message");
  let result = 0;

  messageField.textContent = "";

  if (isNaN(num1) || num1.trim() === "") {
    messageField.textContent = "Giá trị nhập ở ô Số thứ nhất không phải là số";
    return;
  }
  if (isNaN(num2) || num2.trim() === "") {
    messageField.textContent = "Giá trị nhập ở ô Số thứ hai không phải là số";
    return;
  }

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      if (number2 === 0) {
        messageField.textContent = "Không thể chia cho 0";
        return;
      }
      result = number1 / number2;
      break;
  }

  resultField.value = result;
});

document.getElementById("num1").addEventListener("input", function () {
  document.getElementById("message").textContent = "";
});

document.getElementById("num2").addEventListener("input", function () {
  document.getElementById("message").textContent = "";
});

let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((button) => {
  button.addEventListener("click", function (e) {
    display.innerText += e.target.innerText;
    try {
      if (display.innerText.length > 12) {
        alert("Maximum Input");
        display.innerText = "";
      } else if (e.target.innerText == "AC") {
        display.innerHTML = "";
      } else if (e.target.innerText == "DEL") {
        display.innerText = display.innerText.slice(0, -4);
      } else if (e.target.innerText == "=") {
        display.innerText = display.innerText.slice(0, -1);
        display.innerText = eval(display.innerText);
      }
    } catch (error) {
      display.innerText = "Syn Error";
    }
  });
});



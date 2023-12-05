console.log("hello there");

let targetValue = "";

const mapBox = document.querySelectorAll(".map_box");
const customer = document.querySelectorAll(".customer_name");

mapBox.forEach((el) => {
  el.addEventListener("click", (event) => {
    console.log(event.target, el.textContent);
    handleInput(el);
  });
});

customer.forEach((el) => {
  el.addEventListener("click", (event) => {
    console.log(event.target, el.textContent);
    targetValue = el.textContent;
  });
});

function handleInput(element) {
  if (element.textContent == "" && targetValue == "") {
    alert("TODO - Please choose a customer name to input");
  } else {
    element.textContent = targetValue;
  }
}

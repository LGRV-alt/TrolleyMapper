console.log("hello there");

let targetValue = "";

const lorryMap = document.querySelector(".lorry_map");
const customer = document.querySelectorAll(".customer_name");
const mapBtn = document.querySelectorAll(".map_btn");
const customerInfo = document.querySelector(".customer_info");
const customerInputButton = document.querySelector("#customer_create_button");
const navBtn = document.querySelector(".nav_button");
const inputModal = document.querySelector(".inputField");
const modalScreen = document.querySelector(".modalScreen");

navBtn.addEventListener("click", () => {
  if (inputModal.classList.contains("showModal")) {
    inputModal.classList.remove("showModal");
    modalScreen.classList.remove("blockScreen");
    navBtn.textContent = "+";
  } else {
    inputModal.classList.add("showModal");
    modalScreen.classList.add("blockScreen");
    navBtn.textContent = "x";
  }
});

modalScreen.addEventListener("click", () => {
  inputModal.classList.remove("showModal");
  modalScreen.classList.remove("blockScreen");
  navBtn.textContent = "+";
});

mapBtn.forEach((el) => {
  el.addEventListener("click", (event) => {
    clearMap();
    createMap(getNum(el.textContent), lorryMap);
  });
});

function getNum(string) {
  if (string.length > 2) {
    newString = string.slice(0, 2);
    number = parseInt(newString);
    return number;
  } else {
    newString = string.slice(0, 1);
    number = parseInt(newString);
    return number;
  }
}

customer.forEach((el) => {
  el.addEventListener("click", (event) => {
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

function clearMap() {
  const mapBox = document.querySelectorAll(".map_box");
  mapBox.forEach((element) => {
    element.remove();
  });
}

function createMap(num, element) {
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    element.appendChild(div);
    div.classList.add("map_box");
    div.addEventListener("click", (event) => {
      handleInput(event.target);
    });
  }
}

function createCustomer(obj) {
  let div = document.createElement("div");
  let h4 = document.createElement("h4");
  let p = document.createElement("p");

  customerInfo.appendChild(div);
  div.classList.add("customer_box");
  div.appendChild(h4).classList.add("customer_name");
  div.appendChild(p).classList.add("customer_items");
  h4.textContent = obj.name;
  p.textContent = obj.trollies;
  h4.addEventListener("click", (event) => {
    targetValue = event.target.textContent;
  });
}

customerInputButton.addEventListener("click", () => {
  captureCustomer();
});

function captureCustomer() {
  let customer = document.querySelector("#customer_input");
  let customerTrollies = document.querySelector("#customer_trollies");
  let newCustomer = new customerInput(customer.value, customerTrollies.value);
  createCustomer(newCustomer);
}

function customerInput(name, trollies) {
  this.name = name;
  this.trollies = trollies;
}

const mitchell = new customerInput("mitchell", "8T");

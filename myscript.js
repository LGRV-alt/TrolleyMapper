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
const hiddenBtn = document.querySelector(".hide_btn");
const themeBtn = document.querySelector(".theme_btn");
const toggleMode = document.querySelector(".toggle_mode");

function removeCustomer() {
  let els = document.querySelectorAll(".del_customer");
  for (let i = 0; i < els.length; i++) {
    els[i].addEventListener("click", (e) => {
      e.preventDefault();
      e.target.closest("div").remove();
    });
  }
}
removeCustomer();

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
  removeCustomer();
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
  let btn = document.createElement("button");

  customerInfo.appendChild(div);
  div.appendChild(btn).classList.add("del_customer");
  btn.textContent = "x";
  div.classList.add("customer_box");
  div.appendChild(h4).classList.add("customer_name");
  div.appendChild(p).classList.add("customer_items");
  h4.textContent = obj.name;
  if (obj.trollies != "") {
    p.textContent = `${obj.trollies}T ${obj.extras}`;
  } else {
    p.textContent = `${obj.extras}`;
  }
  h4.addEventListener("click", (event) => {
    targetValue = event.target.textContent;
  });

  removeCustomer();
}

inputModal.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    captureCustomer();
  }
});

customerInputButton.addEventListener("click", () => {
  captureCustomer();
});

function captureCustomer() {
  let customer = document.querySelector("#customer_input");
  let customerTrollies = document.querySelector("#customer_trollies");
  let customerExtras = document.querySelector("#customer_extras");
  let newCustomer = new customerInput(
    customer.value,
    customerTrollies.value,
    customerExtras.value
  );

  if (
    (customer.value && customerTrollies.value != "") ||
    (customer.value && customerExtras.value != "")
  ) {
    // Change this to a spread operator?
    showCorrectInput(customer);
    showCorrectInput(customerTrollies);
    showCorrectInput(customerExtras);
    createCustomer(newCustomer);
  } else if (customer.value == "") {
    showError(customer);
  } else if (customerTrollies.value == "") {
    showError(customerTrollies);
  }
}

function showError(element) {
  element.classList.add("flash_red");

  setTimeout(function () {
    element.classList.remove("flash_red");
  }, 300);
}

function showCorrectInput(elements) {
  elements.classList.add("flash_green");

  setTimeout(function () {
    elements.classList.remove("flash_green");
  }, 300);
}

function customerInput(name, trollies, extras) {
  this.name = name;
  this.trollies = trollies;
  this.extras = extras;
}

function handleTheme() {
  let colorMode = "Dark";
  toggleMode.textContent = "Dark";
  themeBtn.addEventListener("click", () => {
    if (colorMode == "Dark") {
      document.body.classList.remove("dark_mode");
      document.body.classList.add("light_mode");
      toggleMode.classList.add("toggle_light_mode");
      inputModal.style.backgroundColor = "gray";
      document.querySelector(".inputMain").style.backgroundColor =
        "var(--light_main_color)";
      colorMode = "Light";
      toggleMode.textContent = colorMode;
    } else {
      document.body.classList.remove("light_mode");
      document.body.classList.add("dark_mode");
      toggleMode.classList.remove("toggle_light_mode");
      inputModal.style.backgroundColor = "black";
      document.querySelector(".inputMain").style.backgroundColor =
        "var(--dark_main_color)";

      colorMode = "Dark";
      toggleMode.textContent = colorMode;
    }
  });
}

handleTheme();

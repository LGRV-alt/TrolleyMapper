console.log("hello there");

let targetValue = "";

const lorryMap = document.querySelector(".lorry_map");
const customer = document.querySelectorAll(".customer_name");
const mapBtn = document.querySelectorAll(".map_btn");
const customerInfo = document.querySelector(".customer_info");

lorryMap.addEventListener("click", (event) => {
  console.log(event);
  if (event.target == div.map_box) {
    console.log("box");
  }
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

let cus = {
  name: "albar",
  trollies: "6T",
};

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

function customerInput(name, trollies) {
  this.name = name;
  this.trollies = trollies;
}

const mitchell = new customerInput("mitchell", "8T");

createCustomer(cus);
createCustomer(mitchell);

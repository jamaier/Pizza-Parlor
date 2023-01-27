//Business Logic ------------------

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.crustCost = function() {
  let crustCost = 0.00;
  if (this.size === "Small") {
    crustCost += 7.00; 
  } else if (this.size === "Medium") {
    crustCost += 9.00;
  } else if (this.size === "Large") {
    crustCost += 11.00; 
  }
  return crustCost;
};

Pizza.prototype.showToppings = function() {
  let topping = [];
  let toppingList = document.querySelectorAll("input[type=checkbox]:checked");
  for(let i = 0; i < toppingList.length; i++) {
    topping.push(toppingList[i].value);
  }
  return topping;
};

function Order(deliveryMethod) {
  this.deliveryMethod = deliveryMethod;
}

Order.prototype.delivery = function() {
  let deliveryCost = 0
  if(this.deliveryMethod === "Delivery") {
    deliveryCost += 5;
  }
  return deliveryCost;
};

Order.prototype.toppingsCost = function() {
  let topping = [];
  let toppingList = document.querySelectorAll("input[type=checkbox]:checked");
  for(let i = 0; i < toppingList.length; i++) {
    if (toppingList[i].checked) {
      topping.push(toppingList[i]);
    }
  }
  return topping.length;
};

//UI Logic -----------------------

function handleFormSubmission(event) {
  event.preventDefault();
  const pizzaSize = document.getElementById("crust-size").value;
  const pizzaToppings = document.querySelectorAll("input[type=checkbox]:checked");
  const delivery = document.getElementById("delivery-method").value;
  let newOrder = new Order(delivery);
  let newPizza = new Pizza(pizzaSize, pizzaToppings);
  let toppings = newPizza.showToppings();
  let displayOrder = document.getElementById("display-order");
  let showTotal = document.getElementById("total-cost");
  let totalCost = newPizza.crustCost() + newOrder.toppingsCost() + newOrder.delivery();
  let showSize = document.getElementById("size");
  let showToppings = document.getElementById("toppings");
  showSize.innerText = newPizza.size;
  showToppings.innerText = toppings.join(", ");
  showTotal.innerText = "$" + totalCost;
  displayOrder.removeAttribute("class");
}

window.addEventListener("load", function() {
  document.getElementById("select-order").addEventListener("submit", handleFormSubmission)
})
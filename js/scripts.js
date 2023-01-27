//Business Logic ------------------

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.crustCost = function() {
  crustCost = 0;
  if (this.size === "small") {
    return crustCost += 7; 
  } else if (this.size === "medium") {
    return crustCost += 9;
  } else if (this.size === "large") {
    return crustCost += 11; 
  }
};

Pizza.prototype.selectToppings = function() {
  toppingsCost = 0;
  if (this.topping === "peperoni") {
    return toppingsCost += 1;
  } else if (this.topping === "Mushrooms") {
    return toppingsCost += 1;
  }
};


//UI Logic -----------------------

function handleFormSubmission(event) {
  event.preventDefault();
  const pizzaSize = document.getElementById("crust-size").value;
  const pizzaToppings = document.getElementById("select-toppings").value;
  let newPizza = new Pizza(pizzaSize, pizzaToppings);
  let displayOrder = document.getElementById("display-order");
  let showTotal = document.getElementById("total-cost");
  let totalCost = newPizza.crustCost() + newPizza.selectToppings();
  let showSize = document.getElementById("size");
  let showToppings = document.getElementById("toppings");
  showSize.innerText = newPizza.crustCost();
  showToppings.innerText = newPizza.selectToppings();
  showTotal.innerText = "$" + totalCost;
  displayOrder.removeAttribute("class");
}

window.addEventListener("load", function() {
  document.getElementById("select-order").addEventListener("submit", handleFormSubmission)
})
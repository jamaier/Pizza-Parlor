//Business Logic ------------------

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.selectedOrder = function() {
  return this.size + " " + this.topping;
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

Pizza.prototype.selectToppings = function() {
  let toppingsCost = 0.00;
  if (this.topping === "Peperoni") {
    toppingsCost += 1.00;
  } 
  if (this.topping === "Mushrooms") {
    toppingsCost += 1.00;
  }
  return toppingsCost;
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
  showSize.innerText = newPizza.size;
  showToppings.innerText = newPizza.topping;
  showTotal.innerText = "$" + totalCost;
  displayOrder.removeAttribute("class");
}

window.addEventListener("load", function() {
  document.getElementById("select-order").addEventListener("submit", handleFormSubmission)
})
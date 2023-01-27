//Business Logic ------------------

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

// Pizza.prototype.selectedOrder = function() {
//   return this.size + " " + this.topping;
// }

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
  this.topping = [];
  let toppingList = document.querySelectorAll("input[type=checkbox]:checked");
  for(let i = 0; i < toppingList.length; i++) {
  this.topping.push(toppingList[i].value);
  }
  return this.topping.join(", ");
  }

Pizza.prototype.toppingsCost = function() {
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
  let newPizza = new Pizza(pizzaSize, pizzaToppings);
  let toppings = newPizza.showToppings();
  let displayOrder = document.getElementById("display-order");
  let showTotal = document.getElementById("total-cost");
  let totalCost = newPizza.crustCost() + newPizza.toppingsCost();
  let showSize = document.getElementById("size");
  let showToppings = document.getElementById("toppings");
  showSize.innerText = newPizza.size;
  showToppings.innerText = toppings;
  showTotal.innerText = "$" + totalCost;
  displayOrder.removeAttribute("class");
}

window.addEventListener("load", function() {
  document.getElementById("select-order").addEventListener("submit", handleFormSubmission)
})
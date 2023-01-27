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
  }
}



//UI Logic -----------------------
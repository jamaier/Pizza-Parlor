//Business Logic ------------------

function Pizza(size) {
  this.size = size;
}

Pizza.prototype.crustCost = function() {
  crustCost = 0;
  if (this.size === "small") {
    return crustCost += 7; 
  } else if (this.size === "medium") {
    return crustCost += 9;
  }
  // return crustCost;
}



//UI Logic -----------------------
# _Pizza Parlor_

#### By _Jacob Maier_

#### _A webpage for a Pizza Parlor to take orders using object oriented JavaScript_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Git_

## Description

_This webpage will take muiltiple inputs in different ways from the user and create a order display showing selected items with a total cost of the order. This is done using Object Oriented JavaScript and looping through arrays of input._

## Setup/Installation Requirements

* _Clone this repo to your local machine_
* _Navigate to the top level of the file_
* _Open index.html in your browser window_


## Known Bugs

* _N/A_

## License

_MIT_

Copyright (c) _2023_ _Jacob Maier_

#### Note: "Starting feature branch to merge later with main once functionality is obtained." 11:00

## Tests - 

#### Describe: Pizza("small")

#### Test: "It should return a pizza object for size based on cost."

Code: if crust === "small" return crustCost += 7

expected output: 7


#### Describe: Pizza("medium")

#### Test: "It should return a pizza object for size based on cost."

Code: if crust === "medium" return crustCost += 9

expected output: 9


#### Describe: Pizza("large")

#### Test: "It should return a pizza object for size based on cost."

Code: if crust === "medium" return crustCost += 11

expected output: 11


### Describe: Pizza("small", "peperoni")

#### Test: "It should return a pizza object for size and toppings based on cost."

Code: 
  if crust === "medium" return crustCost += 9
  if topping === "peperoni" return toppingsCost += 1

expected output: crustCost = 9 and toppingsCost = 1



<!-- ### Describe: selectedOrder("small", "peperoni")

<!-- #### Test: "It should display the names of the toppings and size instead of numbers for costing."

Code : 
  return this.size + " " + this.topping;

expected output:  -->

### Describe: selectToppings (peperoni, muchroom)

code: 

  topping = [];
  toppingList = checkboxes.checked
  for loop pushing checked checkboxes to array and return array length to use as cost value.

Expected Output: 2


### Describe: selectToppings (peperoni, muchroom)

code: 

  topping = [];
  toppingList = checkboxes.checked
  for loop pushing checked checkboxes to array and return array length to display chosen toppings value.

Expected Output: Peperoni, Mushroom


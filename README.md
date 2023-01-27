# _Pizza Parlor_

#### By _Jacob Maier_

#### _A webpage for a Pizza Parlor to take orders using object oriented JavaScript_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Git_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_MIT_

Copyright (c) _2023_ _Jacob Maier_


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

### Describe: selectedOrder("small", "peperoni")

#### Test: "It should display the names of the toppings and size instead of numbers for costing."

Code : 
  return this.size + " " + this.topping;

expected output: 



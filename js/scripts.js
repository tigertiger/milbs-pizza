// Pizza Object needs size & topping properties
// Price formula

// Pizza Business Logic

function Pizza(SizeChoice, ToppingChoice) {
  this.size = SizeChoice;
  this.topping = ToppingChoice;
}

const sizes = [
  {pizzaSize: "itty", price: 5},
  {pizzaSize: "middy", price: 8},
  {pizzaSize: "chubby", price: 10}
]

const toppings = [
  {topping: "Ice Cream", price: 3},
  {topping: "Happy Egg", price: 2},
  {topping: "A Kitten", price: 10}
]

Pizza.prototype.theDamage = function () {
  let cost = 10;
  for (let i = 0;  i < sizes.length; i++) {
    const yourPizza = sizes[i].pizzaSize;
    if (yourPizza === this.size) {
      cost += sizes[i].price;
    }
  }
  for (let i = 0;  i < toppings.length; i++) {
    const yourPizza = toppings[i].topping;
    if (yourPizza === this.topping) {
      cost += toppings[i].price;
    }
  }
    return cost;
}

let friendPizza = new Pizza("itty", "Happy Egg");
friendPizza.theDamage();


// ////////////////////////////////////////////////////////////////////

// Testing Multi-Toppings

function Pizza(SizeChoice, ToppingChoice) {
  this.size = SizeChoice;
  this.topping = ToppingChoice;
  this.additionalToppings = {};
}

const sizes = [
  {pizzaSize: "itty", price: 5},
  {pizzaSize: "middy", price: 8},
  {pizzaSize: "chubby", price: 10}
]

const toppings = [
  {topping: "Ice Cream", price: 3},
  {topping: "Happy Egg", price: 2},
  {topping: "A Kitten", price: 10}
]

Pizza.prototype.addToppings = function() {
  this.additionalToppings[additionalTopping.name] = additionalTopping;
  }

Pizza.prototype.theDamage = function () {
  let cost = 10;
  for (let i = 0;  i < sizes.length; i++) {
    const yourPizza = sizes[i].pizzaSize;
    if (yourPizza === this.size) {
      cost += sizes[i].price;
    }
  }
  for (let i = 0;  i < toppings.length; i++) {
    const yourPizza = toppings[i].topping;
    if (yourPizza === this.topping) {
      cost += toppings[i].price;
    }
  }
    return cost;
}

// additionalToppings logic

function AddToppings(toppingName, toppingPrice) {
  this.name = toppingName;
  this.addPrice = toppingPrice;
}

let additionalToppings = [
  {name: "test1", addPrice: 50}
]

//

let friendPizza = new Pizza("itty", "Happy Egg");
friendPizza.theDamage();
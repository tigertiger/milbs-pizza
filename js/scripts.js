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
  this.contacts = {};
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

//

let friendPizza = new Pizza("itty", "Happy Egg");
friendPizza.theDamage();

// ///////////////////////////////////////

// Business Logic for Pizza ---------

function Pizza(SizeChoice, ToppingChoice) {
  this.size = SizeChoice;
  this.topping = ToppingChoice;
  this.newToppings = {};
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

Pizza.prototype.addPlusToppings = function(newTopping) {
  this.newToppings[newTopping.name] = newTopping;
};

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

// Business Logic for PlusToppings ---------

function PlusToppings(name, addTopPrice) {
  this.name = name;
  this.addTopPrice = addTopPrice;
}

// Test Content -----------

let friendPizza = new Pizza("itty", "Happy Egg");
let sadEgg = new PlusToppings("Sad Egg", 7);
friendPizza.addPlusToppings(sadEgg);
friendPizza;

friendPizza.theDamage();
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

function Pizza(SizeChoice, ToppingChoice, ToppingChoice2, ToppingChoice3, ToppingChoice4) {
  this.size = SizeChoice;
  this.topping = ToppingChoice;
  this.topping2 = ToppingChoice2;
  this.topping3 = ToppingChoice3;
  this.topping4 = ToppingChoice4;
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
  {topping: "A Kitten", price: 10},
  {topping: "Cute Little Clouds", price: 15}
]

const toppings2 = [
  {topping2: "Ice Cream", price: 3},
  {topping2: "Happy Egg", price: 2},
  {topping2: "A Kitten", price: 10},
  {topping2: "Cute Little Clouds", price: 15}
]

const toppings3 = [
  {topping3: "Ice Cream", price: 3},
  {topping3: "Happy Egg", price: 2},
  {topping3: "A Kitten", price: 10},
  {topping3: "Cute Little Clouds", price: 15}
]

const toppings4 = [
  {topping4: "Ice Cream", price: 3},
  {topping4: "Happy Egg", price: 2},
  {topping4: "A Kitten", price: 10},
  {topping4: "Cute Little Clouds", price: 15}
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
  for (let i = 0;  i < toppings2.length; i++) {
    const yourPizza = toppings2[i].topping2;
    if (yourPizza === this.topping2) {
      cost += toppings2[i].price;
    }
  }
  for (let i = 0;  i < toppings3.length; i++) {
    const yourPizza = toppings3[i].topping3;
    if (yourPizza === this.topping3) {
      cost += toppings3[i].price;
    }
  }
  for (let i = 0;  i < toppings4.length; i++) {
    const yourPizza = toppings4[i].topping4;
    if (yourPizza === this.topping4) {
      cost += toppings4[i].price;
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

let friendPizza = new Pizza("itty", "Happy Egg", "Ice Cream");
let sadEgg = new PlusToppings("Sad Egg", 7);
friendPizza.addPlusToppings(sadEgg);
friendPizza;

friendPizza.theDamage();

// --------------------------

// PlusToppings.prototype.sumToppings = function () {
//   let cost = 0;
//   for (let i = 0;  i < names.length; i++) {
//     const yourToppings = names[i].name;
//     if (yourToppings === this.name) {
//       cost += names[i].addTopPrice;
//     }
//   }
//     return cost;
// }

// UI


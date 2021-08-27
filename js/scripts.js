// Pizza Object needs size & topping properties
// Price formula

// Pizza Business Logic

function Pizza(size, basicToppings) {
  this.size = size;
  this.basicToppings = basicToppings;
  this.price = 10;
  // this.premiumToppings = premiumToppings;
}

const sizes = [
  {size: "itty", price: 5},
  {size: "mitty", price: 8},
  {size: "chubby", price: 10},
]

const toppings = [
  {topping: "Ice Cream", price: 3},
  {topping: "Happy Egg", price: 2},
  {topping: "A Kitten", price: 10},
]

Pizza.prototype.theDamage = function() {
  let finalCost = 0;
  for (let i = 0; i < sizes.length; i ++) {
    const yourPizza = sizes[i].size;
    if (yourPizza === this.size) {
      finalCost = sizes[i].price + this.price;
    }
  }
  return finalCost;
}
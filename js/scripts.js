
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

Pizza.prototype.toppingTotal = function() {
  let toppingValues = $("#checkToppings input:checkbox:checked").map(function(){
    return $(this).val();
  }).get();
  console.log(toppingValues);
  let numberedToppings = (toppingValues.toString()).split(",").map((i) => Number(i));
  console.log(numberedToppings);
  let sum = numberedToppings.reduce(function(a, b) {
    return a +b;
  });
  return sum;
}
Pizza.prototype.toppingNames = function() {
let topNames = $("#checkToppings input:checkbox:checked").map(function(){
  return $(this).attr('name');
}).get();
return topNames;
}
// UI

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    $("#orderReceipt").show();
    $("#again").show();
    $("#order").hide();
    const inputName = $("input#custName").val();
    const inputSize = $("input:radio[name=size]:checked").val();
    // const inputSize = $("select#size").val();
    const inputTopping1 = $("select#toppings").val();
    const inputTopping2 = $("select#toppings2").val();
    const inputTopping3 = $("select#toppings3").val();
    const inputTopping4 = $("select#toppings4").val();
    const friendPizza = new Pizza(inputSize, inputTopping1, inputTopping2, inputTopping3, inputTopping4);
    // let yourYums = ((friendPizza.toppingNames()).toString());
    let yourYums = ((friendPizza.toppingNames()).join(", "));
    let yourPrice = (friendPizza.theDamage() + friendPizza.toppingTotal());
    console.log(friendPizza.theDamage(), "The Damage");
    console.log(friendPizza.toppingTotal(), "Topping Total");
    console.log(yourPrice, "Your Price");
    $("#customerName").text(inputName);
    $("#pSize").html(friendPizza.size);
    $("#toppingList").html(yourYums);
    $("#finalPrice").html("$" + yourPrice);
    console.log(friendPizza.toppingNames());
  });


  $("#orderAgain").click(function() {
    location.reload();
  });

});
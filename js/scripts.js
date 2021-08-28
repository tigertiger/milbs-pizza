
// Business Logic for Pizza ---------

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
  {topping: "Chocolate Frosting", price: 3},
  {topping: "Sunshine", price: 10},
  {topping: "Love", price: 0},
  {topping: "Marinara", price: 3}
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
    const inputTopping1 = $("select#toppings").val();
    const friendPizza = new Pizza(inputSize, inputTopping1);
    let yourYums = ((friendPizza.toppingNames()).join(", "));
    let yourPrice = (friendPizza.theDamage() + friendPizza.toppingTotal());
    console.log(friendPizza.theDamage(), "The Damage");
    console.log(friendPizza.toppingTotal(), "Topping Total");
    console.log(yourPrice, "Your Price");
    $("#customerName").text(inputName);
    $("#pSize").html(friendPizza.size);
    $("#sauce").text(friendPizza.topping);
    $("#toppingList").html(yourYums);
    $("#finalPrice").html("$" + yourPrice);
    console.log(friendPizza.topping, "toppings");
  });


  $("#orderAgain").click(function() {
    location.reload();
  });

});
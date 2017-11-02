var cart = [];

function getCart() {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * (100-1)) + 1;
   var newCart = Object.assign({}, { [item] : itemPrice });
   cart.push(newCart);
   console.log(`${item} has been added to your cart.`);
   return cart;
  }
  function viewCart() {
    var blankSlate = [];
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.");
   } else { for (var i in cart) {
     var idx = 0;
     var item = Object.keys(cart[0])[idx];
     var itemCost = cart[0][item];
     var anotherItem = Object.keys(cart.slice(-1)[0])
     var anotherItemCost = cart.slice(-1)[0][anotherItem];
     var goodItem = Object.keys(cart.slice(-2)[0]);
     var goodItemCost = cart.slice(-2)[0][goodItem];
     var funItem = Object.keys(cart.slice(-3)[0]);
     var funItemCost = cart.slice(-3)[0][funItem];
     switch (true) { case (cart.length === 1):
   console.log(`In your cart, you have ${item} at $${itemCost}.`);
   break;
   case (cart.length === 2):
     console.log(`In your cart, you have ${item} at $${itemCost} and ${anotherItem} at $${anotherItemCost}.`);
     break;
     case (cart.length === 3):
     console.log(`In your cart, you have ${item} at $${itemCost}, ${goodItem} at $${goodItemCost}, and ${anotherItem} at $${anotherItemCost}.`);
     break;
     default:
     console.log(`In your cart, you have ${item} at $${itemCost}, ${funItem} at $${funItemCost}, ${goodItem} at $${goodItemCost}, and ${anotherItem} at $${anotherItemCost}.`);
   }
 }
 }
  }

function total() {
   var totalCost = 0;
   for (var i in cart) {
   var item = Object.keys(cart[i]);
   var itemCost = cart[i][item];
   totalCost += itemCost;
 }
 return totalCost;
		  }

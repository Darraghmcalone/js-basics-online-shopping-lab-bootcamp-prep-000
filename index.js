var cart = [];

function getCart() {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * (100-1)) + 1;
   var newCart = Object.assign({}, { [item] : itemPrice });
   cart.push(newCart);
   console.log(`${item} has been added to your cart.`);
   return cart;
  }
  
     

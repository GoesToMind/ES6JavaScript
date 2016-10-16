let products = [
   { name: 'X_1', type: 'x', quantity: 0, price: 1.0 },
   { name: 'Y_1', type: 'y', quantity: 10, price: 15 },
   { name: 'X_2', type: 'x', quantity: 30, price: 13 },
   { name: 'Y_2', type: 'y', quantity: 3, price: 5 },
   { name: 'Z_1', type: 'z', quantity: 7, price: 0.1 }
];

// Exemple destructuring function
function getFirstQuantity({ name, quantity }) {
   return `Product: ${name}, quantity: ${quantity}`;
}

console.log(getFirstQuantity(products[0]));

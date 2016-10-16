let products = [
   { name: 'X_1', type: 'x', quantity: 0, price: 1.0 },
   { name: 'Y_1', type: 'y', quantity: 10, price: 15 },
   { name: 'X_2', type: 'x', quantity: 30, price: 13 },
   { name: 'Y_2', type: 'y', quantity: 3, price: 5 },
   { name: 'Z_1', type: 'z', quantity: 7, price: 0.1 }
];
let redProducts = [];
let redProductsNew = [];

// OLD form to reduce an array of complex elements
for (let index = 0; index < products.length; index++) {
   if (products[index].type === 'x' && products[index].quantity > '5') {
      redProducts.push(products[index].name);
   }
}
console.log(redProducts);

// New form to reduce an array of complex elements
redProductsNew = products.reduce((initValue, value) => {
   if (value.type === 'x' && value.quantity > '5') {
       initValue.push(value.name);
   }
   return initValue;
}, []);
console.log(redProductsNew);

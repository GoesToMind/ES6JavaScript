let products = [
   { name: 'X_1', type: 'x', quantity: 0, price: 1.0 },
   { name: 'Y_1', type: 'y', quantity: 10, price: 15 },
   { name: 'X_2', type: 'x', quantity: 30, price: 13 },
   { name: 'Y_2', type: 'y', quantity: 3, price: 5 },
   { name: 'Z_1', type: 'z', quantity: 7, price: 0.1 }
];
let filteredProducts = [];
let filteredProductsNew = [];

// OLD form to apply filter on array of complex elements
for (let index = 0; index < products.length; index++) {
   if (products[index].type === 'x' && products[index].quantity > '5') {
      filteredProducts.push(products[index]);
   }
}
console.log(filteredProducts);

// New form to apply filter on array of complex elements
filteredProductsNew = products.filter(product => {
   return product.type === 'x' && product.quantity > 5;
});
console.log(filteredProductsNew);

// Advance Filter function
let goodPrice = function(products, price) {
   return products.filter(product => {
      return product.price <= price;
   });
};
let res = goodPrice(products, 6);
console.log(res);

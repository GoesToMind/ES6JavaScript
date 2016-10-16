let products = [
   { id: 10, name: 'X_1' },
   { id: 20, name: 'X_2' },
   { id: 30, name: 'Y_1' },
   { id: 40, name: 'Y_2' },
   { id: 50, name: 'Z_1' }
];

let findIdOld = 30;
let resOld = null;
let findIdNew = 40;
let resNew = null;

// OLD Simple form to find first occurrence of a value in array
for (let index = 0; index < products.length; index++) {
   if (products[index].id === findIdOld) {
      resOld = products[index];
      break;
   }
}
console.log(resOld);

// NEW Simple form to find first occurrence of a value in array
resNew = products.find(product => {
   return product.id === findIdNew;
});
console.log(resNew);

let numbers = [2, 4, 6];
let doubledNumbers = [];

// Old form to apply calculos inside array
for (let index = 0; index < numbers.length; index++) {
   doubledNumbers.push(numbers[index] * 2);
}
console.log(doubledNumbers);

// New form to apply calculos inside array.
let doubled = numbers.map(number => {
   return number * 2;
});
console.log(doubled);

// New form to apply on multi value
let cars = [
   { model: 'x', price: 'x1' },
   { model: 'y', price: 'y1' },
   { model: 'z', price: 'z1' }
];
let prices = cars.map(car => {
   return car.price;
});
console.log(prices);

let numbers = [1, 2, 3, 4, 5];

// Old Iterate form
let oldSum = 0;
for (let index = 0; index < numbers.length; index++) {
   oldSum += numbers[index];
}
console.log('Old sum = ', oldSum);

// New Iterate form
let newSum = 0;
numbers.forEach(number => {
   newSum += number;
});
console.log('New sum = ', newSum);

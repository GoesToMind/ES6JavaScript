// Use spread operator in simple function
function addNumbers(...numbers) {
   return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5));

// Use spread to concatenate array
const arr1 = [2, 4, 6, 8];
const arr2 = [1, 3, 5, 7];
let arr = [...arr1, ...arr2];
console.log(arr);

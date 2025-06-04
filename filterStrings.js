//filter out strings in the array and return only numbers
function filterStrings(arr) {
  // Use the filter method to create a new array with only numbers
  /* => arrow function  takes each array element (item) and checks if its type is 'number' using the typeof operator with strict equality (===) */

  return arr.filter((item) => typeof item === "number");
}

console.log(filterStrings(arr)); // to display Output using console.log

// Example usage
const arr = [1, "hello", 2, "world", 3, 4, "5", 6, "7", 8, 9, "10"];
console.log(filterStrings(arr)); // Output: [1, 2, 3, 4, 6, 8, 9]

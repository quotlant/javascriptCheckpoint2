//Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
  // Initialize a counter
  let count = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
}
// Example usage:
console.log(countCharacters("Hello, World!")); // Output: 13
// Example usage:
console.log(countCharacters("JavaScript")); // Output: 10

//alternative using the length property
function countCharacters(str) {
  // Return the length of the string
  return str.length;
}
// Example usage:
console.log(countCharacters("Hello, World!")); // Output: 13

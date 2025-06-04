//function to find the smallest and biggest number in an array
function smallestBiggest(arr) {
  // Check if the array is empty
  // If the array is empty, return a message indicating that
  // the array is empty to avoid errors when accessing elements
  if (arr.length === 0) {
    return "Array is empty";
  }

  // Initialize smallest and biggest variables
  // Set both to the first element of the array
  let smallest = arr[0];
  let biggest = arr[0];

  // Loop through the array to find the smallest and biggest numbers
  // Start from the second element (index 1) since we already used the first element

  for (let i = 1; i < arr.length; i++) {
    // Check if the current element is less than the smallest found so far
    // If it is, update the smallest variable
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
    // Check if the current element is greater than the biggest found so far
    // If it is, update the biggest variable
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }

  return { smallest, biggest };
}
// Example usage
const numbers = [3, 5, 1, 8, 2, 7];
const result = smallestBiggest(numbers);
console.log(`Smallest: ${result.smallest}, Biggest: ${result.biggest}`); // Output: Smallest: 1, Biggest: 8

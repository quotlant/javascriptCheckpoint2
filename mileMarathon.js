/**Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

Return true if the marathon is 25 miles long, otherwise, return false. */
// Function to check if the marathon length is correct
function isMarathonLengthCorrect(miles) {
  let totalMiles = 0;

  // Loop through each mile in the array and sum them up
  for (let i = 0; i < miles.length; i++) {
    totalMiles += miles[i];
  }

  // Check if the total length is equal to 25 miles
  return totalMiles === 25;
}
// Example usage: Create an array with mile portions
const milePortions = [5, 10, 5, 5]; // Total is 25 miles
// Call the function and store the result
const isCorrectLength = isMarathonLengthCorrect(milePortions);
// Log the result using a template literal
console.log(`Is the marathon length correct? ${isCorrectLength}`); // Output: Is the marathon length correct? true

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
  if (typeof sentence !== "string") {
    throw new Error("Input must be a string");
  }

  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

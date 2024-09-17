const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;

console.log(
  "Enter lines (each containing at least one digit), type 'END' to finish:"
);

rl.on("line", (line) => {
  if (line === "END") {
    rl.close(); // Stop when user types 'END'
  } else {
    // Extract digits from the line
    const digits = line.match(/\d/g); // Match all digits in the line
    if (digits && digits.length > 0) {
      let firstDigit = digits[0];
      let lastDigit = digits[digits.length - 1];

      // If there's only one digit in the line, use it for both the first and last digit
      if (digits.length === 1) {
        lastDigit = firstDigit; // Make both digits the same
      }

      const twoDigitNumber = parseInt(firstDigit + lastDigit, 10); // Form a two-digit number
      sum += twoDigitNumber; // Add to the sum
    }
  }
});

rl.on("close", () => {
  console.log(`The sum of the two-digit numbers is: ${sum}`);
});

const number = 19;

// Using if-else 
if (number % 2 === 0) {
  console.log(`${number} is even.`);
} else {
  console.log(`${number} is odd.`);
}

// Using ternary operator 
const result = number % 2 === 0 ? "even" : "odd";
console.log(`${number} is ${result}.`);

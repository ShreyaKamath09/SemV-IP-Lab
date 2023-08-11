// Using for loop
console.log("Using for loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Using while loop 
console.log("\nUsing while loop:");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// Using do while loop
console.log("\nUsing do...while loop:");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Using for in loop 
console.log("\nUsing for...in loop:");
for (let index in [1, 2, 3, 4, 5]) {
  console.log([1, 2, 3, 4, 5][index]);
}

// Using forEach loop 
console.log("\nUsing forEach loop:");
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
  console.log(number);
});

//using iterator
console.log("\nUsing Iterators:");

function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return { value: n, done: false };
      }
    };
  }
  
  const nIterator = myNumbers(); 
  for (let i = 0; i < 3; i++) {
    const result = nIterator.next();
    console.log(result.value);
  }
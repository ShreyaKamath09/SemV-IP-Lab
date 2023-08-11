// Simple Function
function greet(name) {
    return `Good Morning, ${name}!`;
  }
  console.log(greet("Shreya")); 
  
  // Anonymous Function
  const square = function(x) {
    return x * x;
  };
  console.log(square(5)); 
  
  // Parameterized Function
  function addNumbers(a, b) {
    return a + b;
  }
  console.log(addNumbers(3, 17)); 
  
  // Rest Parameter Function
  function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  console.log(sum(2, 4, 6, 8)); 
  console.log(sum(3,4,5));
  console.log(sum(1,2,3,4,5,6,7,8));
  
  // Arrow Function
  const multiply = (a, b) => a * b;
  console.log(multiply(3, 10)); 
  
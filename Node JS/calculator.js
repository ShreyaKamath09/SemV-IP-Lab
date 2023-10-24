//Calculator in REPL environment
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator() {
  rl.question('Enter an expression or type "exit" to quit: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close(); 
      return;
    }

    try {
      const result = eval(input);
      console.log(`Result: ${result}`);
    } catch (error) {
      console.error('Error:', error.message);
    }

    calculator(); 
  });
}

console.log('Calculator using REPL commands');
calculator();

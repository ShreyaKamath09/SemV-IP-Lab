function findLongestWord(inputString) {
    let longestWord = "";
    let currentWord = "";
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      if (char !== " " && char !== ".") {
        currentWord += char;
      } else {
        if (currentWord.length > longestWord.length) {
          longestWord = currentWord;
        }
        currentWord = "";
      }
    }
  
    // last word
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  
    return longestWord;
  }
  
  function findLongestWordAndDisplay() {
    const userInput = document.getElementById("sentence").value;
    const longest = findLongestWord(userInput);
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The longest word is: ${longest}`;
  }

  //const userInput = "My name is Shreya. I study engineering.";
  //const longest = findLongestWord(userInput);
  //console.log(`The longest word is: ${longest}`);
  

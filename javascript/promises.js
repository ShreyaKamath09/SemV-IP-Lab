console.log("Promises in JS:")
function fetchRandomFact() {
    return new Promise((resolve, reject) => {
      fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error!');
          }
          return response.json();
        })
        .then((data) => {
          resolve(data.text);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  fetchRandomFact()
    .then((fact) => {
      console.log('Random Fact:', fact);
    })
    .catch((error) => {
      console.error('Error fetching text:', error);
    });
  
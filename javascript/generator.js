function* countGenerator() {
    let count = 1;
    while (true) {
      yield count;
      count++;
    }
  }
  
  const counter = countGenerator();
  console.log("Generator Function:")
  console.log(counter.next().value); 
  console.log(counter.next().value); 
  console.log(counter.next().value); 

  
  
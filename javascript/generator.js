function* countGenerator() {
    let count = 1;
    while (true) {
      yield count;
      count+=10;
    }
  }
  
  const counter = countGenerator();
  console.log("Generator Function:")
  console.log(counter.next().value); 
  console.log(counter.next().value); 
  console.log(counter.next().done); 
  console.log(counter.next().value); 
  console.log(counter.next().value); 
  
  
  

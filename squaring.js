function squareNumbers() {
    for (let i = 1; i <= 10; i++) {
      const squared = square(i);
      console.log(squared);
    }
  }
  
  function square(num) {
    return num * num;
  }
  
squareNumbers();
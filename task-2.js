const checkPrimeNumber = (num) => {
  if (num == 1) {
    return console.log(`The number ${num} is a prime number`);
    //check if the number is equal to 1
    //return out of the function if true
  } else if (num == 2) {
    return console.log(`The number ${num} is not a prime number`);
    //check if the number is equal to 2
    //return out of the function if true
  }

  for (let i = 2; i < num; i++) {
    //loop through all values smaller than the number and bigger than 2
    if (num % i == 0) {
      return console.log(`The number ${num} is not a prime number`);
      //if it's divisible by any positive integer before it, then it's not a prime number
      //return out of the function
    }
  }
  return console.log(`The number ${num} is a prime number`);
  //else, the number is an odd number
};
checkPrimeNumber(9);

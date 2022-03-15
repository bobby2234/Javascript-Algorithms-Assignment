const customPush = (arr, value) => {
  arr.length == 0 ? (arr[0] = value) : (arr[arr.length] = value);
  return arr;
};
//created a custom push function
let allNum = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const checkPrimeNumber = (num) => {
  if (num == 1) {
    return num;
  } else if (num == 2) {
    return 0;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return num;
};
//created a function to check if a number, num, is a prime number. If it is, return 1, else return 0
const checkForAllPrimeNumber = (sampleArr) => {
  let result = [];
  for (let i = 0; i < sampleArr.length; i++) {
    let inp = checkPrimeNumber(sampleArr[i]);
    //a variable to store the result of the function
    if (inp != 0) {
      //if it's a prime number, push it to the result array
      customPush(result, inp);
    }
  }
  return console.log(
    `The prime numbers from the array: ${JSON.stringify(
      sampleArr
    )} is equal to = ${JSON.stringify(result)}`
  );
};
checkForAllPrimeNumber(allNum);

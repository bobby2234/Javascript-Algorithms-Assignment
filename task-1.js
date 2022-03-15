//
let num = [1, 4, 3, 6, 8, 4, 1, 9, 6, 7, 4, 6];
const customPush = (arr, value) => {
  let lastValue = arr.length - 1;
  arr.length == 0 ? (arr[0] = value) : (arr[arr.length] = value);
  return arr;
};
//created a custom push function
const sumOfAllIntegers = (arr) => {
  let odd = [];
  let even = [];
  let evenSum = 0;
  let oddSum = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    //loop through the array
    if (arr[i] % 2 == 1) {
      customPush(odd, arr[i]);
      //if it is an odd number, push it into the odd array created above
    } else if (arr[i] % 2 == 0) {
      customPush(even, arr[i]);
      //if it is an even number, push it into the even array created above
    }
  }
  // odd.map((k) => {
  //   parseInt(k);
  //   return (oddSum += k);
  //   //for each of the items in the odd array, parse the value to an integer value and add it to the oddsum letiable created above
  // });
  for (val of odd) {
    parseInt(val);
    oddSum += val;
  }
  // even.map((k) => {
  //   parseInt(k);
  //   return (evenSum += k);
  //   //for each of the items in the odd array, parse the value to an integer value and add it to the oddsum letiable created above
  // });
  for (val of even) {
    parseInt(val);
    evenSum += val;
  }
  // result.push(evenSum);
  customPush(result, evenSum);
  // result.push(oddSum);
  customPush(result, oddSum);
  //push the sum of the even and the odd numbers in the result array and return it
  return console.log(
    `The sum of the even array:${JSON.stringify(
      even
    )} and the odd array:${JSON.stringify(odd)} is equal to ${JSON.stringify(
      result
    )}`
  );
};
sumOfAllIntegers(num);

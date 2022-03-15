const customSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
//created a custom sort function
const customSplice = (arr, first, second) => {
  let tempArr = [];
  for (let i = 0; i < second; i++) {
    tempArr[i] = arr[first];
    first++;
  }
  return tempArr;
};
//created a custom splice function

const checkTheSumOfThreeNumbers = (arr, num) => {
  let checkArr;
  let cussArr;

  cussArr = customSort(arr);
  //sort the array and return the value to the cussArr variable
  for (let i = 0; i < cussArr.length; i++) {
    if (cussArr[i] >= num) {
      checkArr = customSplice(cussArr, 0, cussArr[i] - 1);
      //for every item, check the number directly larger than the given number and splice the array from there and store it into the checkArr variable
      //the checkArr variable was created to make looping through the required values easier
    } else {
      checkArr = cussArr;
      //if the number is bigger than every value in the array, then use the entire array to find the 3 values
    }
  }
  for (let x = 0; x < checkArr.length; x++) {
    //loop through 3 values at the same time starting from the first 3 and move the last values one place up until the 3 values are found
    for (let y = x + 1; y < checkArr.length; y++) {
      for (let z = y + 1; z < checkArr.length; z++) {
        if (checkArr[x] + checkArr[y] + checkArr[z] == num) {
          return console.log(
            JSON.stringify([checkArr[x], checkArr[y], checkArr[z]])
          );
        }
      }
    }
  }

  return console.log(-1);
};

checkTheSumOfThreeNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 4], 5);

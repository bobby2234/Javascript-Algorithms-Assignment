// const loopThroughString=(str,charac)=>{

// }
const customPush = (arr, value) => {
  let lastValue = arr.length - 1;
  arr.length == 0 ? (arr[0] = value) : (arr[arr.length] = value);
  return arr;
};
//created a custom push function
const customSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return 1;
    }
  }
  return 0;
};
//created a custom search function

const checkForExisting3s = (num) => {
  let tempArr = [];
  for (let i = 0; i < num; i++) {
    if (customSearch(i + "", "3") != 0) {
      //check each value in the array to see if it contains the character 3, push the value into the tempArr if true
      customPush(tempArr, i);
    }
  }
  return console.log(
    `count: ${tempArr.length}, numbers: ${JSON.stringify(tempArr)}`
  );
};

checkForExisting3s(100);

let arr = [3, 2, 5, 2, 4, 6, 8, 3, 5];
let tempArr = [1, 2, 3];
const customPush = (arr, value) => {
  let lastValue = arr.length - 1;
  arr.length == 0 ? (arr[0] = value) : (arr[arr.length] = value);
  return arr;
};
// console.log(customPush(tempArr, 6));
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
const customSplice = (arr, first, second) => {
  let tempArr = [];
  for (let i = 0; i < second; i++) {
    tempArr[i] = arr[first];
    first++;
  }
  return tempArr;
};
const customSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return 1;
    }
  }
  return 0;
};
// let textArr = "This ";
// console.log(customSearch(textArr, "s"));
// console.log(arr.splice(1, 3));
const customJoin = (arr) => {
  let tempStr = "";
  for (let i = 0; i < arr.length; i++) {
    tempStr += arr[i];
  }
  return tempStr;
};
let testArr = ["a", "b", "c"];
console.log(customJoin(testArr));

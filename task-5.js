const customPush = (arr, value) => {
  let lastValue = arr.length - 1;
  arr.length == 0 ? (arr[0] = value) : (arr[arr.length] = value);
  return arr;
};
//created a custom push function
const replaceSpace = (str) => {
  let tempArr = [];
  let tempStr = "";
  for (let i = 0; i < str.length; i++) {
    customPush(tempArr, str[i]);
    //parse all the values from the string array into the tempArr array
  }
  for (let j = 0; j < tempArr.length; j++) {
    if (tempArr[j] === " ") {
      tempArr[j] = "%";
      //for every item in the tempArr array, check if any value is equal to ' ', if yes, replace with %
    }
    tempStr += tempArr[j];
    //tempStr was created to add all values of tempArr into a string
  }
  return console.log(tempStr);
};

replaceSpace("This is a boy with the name");
//David-Uk

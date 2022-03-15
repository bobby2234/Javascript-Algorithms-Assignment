const customJoin = (arr) => {
  let tempStr = "";
  for (let i = 0; i < arr.length; i++) {
    tempStr += arr[i];
  }
  return tempStr;
};
//custom join function
const palindrome = (str) => {
  let tempArr = [];
  let tempIndex = 0;
  let result;
  for (let i = str.length - 1; i > -1; i--) {
    tempArr[tempIndex] = str[i];
    tempIndex += 1;
    // the last value in the str array becomes the first value in the tempArr array
  }
  // result = tempArr.join("");
  result = customJoin(tempArr);
  if (result == str) {
    return console.log(`The string is a palindrome`);
  } else {
    return console.log(`The string is not a palindrome`);
  }
  //if the two strings match, the string is a palindrome, else it isn't
};
// console.log(["ab", "ba"].toString());
palindrome("madamm");

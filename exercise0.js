// 0. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
let strArr = ["13", "2", "34", "14", "5", "86", "3.46"];

const typeCastAndAdd = myArr => {
  return myArr.map(el => parseFloat(el) + 2);
};

console.log("Typecast: ", typeCastAndAdd(strArr));

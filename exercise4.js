/*
4. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/
const demoArr = [
  { id: 1, color: "red", height: 15, width: 20, distance: 10 },
  { id: 2, color: "green", height: 5, width: 30, distance: 15 },
  { id: 3, color: "turqoize", height: 7, width: 9, distance: 8 },
  { id: 4, color: "blue", height: 2, width: 3, distance: 3 },
  { id: 5, color: "red", height: 10, width: 10, distance: 2 },
  { id: 6, color: "crimson", height: 7, width: 8, distance: 16 }
];

// make it work
const reject = (myArr, myIterator) => {
  let newArr = [];
  myArr.map(el => {
    if (myIterator(el)) {
      newArr.push(el);
    }
  });
  return newArr;
};

const iterator = x => {
  if (x.height < 10) {
    return true;
  }
};

console.log(reject(demoArr, iterator)); // return an array of objects with height < 10

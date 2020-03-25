/*
6. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.
*/
const demoArr = [
  { id: 1, color: "red", height: 15, width: 20, distance: 10 },
  { id: 2, color: "green", height: 5, width: 30, distance: 15 },
  { id: 3, color: "turqoize", height: 7, width: 9, distance: 8 },
  { id: 4, color: "blue", height: 2, width: 3, distance: 3 },
  { id: 5, color: "red", height: 10, width: 10, distance: 2 },
  { id: 6, color: "crimson", height: 7, width: 8, distance: 16 }
];

// mak it work
const areasAreBigger = (myArr, area) => {
  myArr.map(el => {
    if (el.width * el.height < area) {
      falseCheck = true;
    }
  });
  if (falseCheck) {
    return false;
  } else {
    return true;
  }
};
console.log(areasAreBigger(demoArr, 10));

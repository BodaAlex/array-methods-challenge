/*
7. Write a function that returns true if at least one of the array elements has the color 'green';
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
const atLeastOneIsOfColor = (myArr, color) => {
  let colorCheck = 0;
  myArr.map(el => {
    if (el.color == color) {
      colorCheck = 1;
    }
  });
  if (colorCheck == 1) {
    return true;
  } else {
    return false;
  }
};
console.log(atLeastOneIsOfColor(demoArr, "green"));

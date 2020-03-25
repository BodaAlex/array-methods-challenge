/*
3. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
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
// const filterArr = myArr => {
//   let newArr = [];
//   myArr.map(el => {
//     if (el.width * el.height <= 100) {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// };

// make it better
const filterArr = myArr => {
  let newArr = myArr.filter(el => el.width * el.height <= 100);
  return newArr;
};

console.log(filterArr(demoArr));

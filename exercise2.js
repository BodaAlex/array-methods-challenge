/*
2. Implement a function that returns the area of all elements in the above array, area = height * width.
*/
const demoArr = [
  { id: 1, color: "red", height: 15, width: 20, distance: 10 },
  { id: 2, color: "green", height: 5, width: 30, distance: 15 },
  { id: 3, color: "turqoize", height: 7, width: 9, distance: 8 },
  { id: 4, color: "blue", height: 2, width: 3, distance: 3 },
  { id: 5, color: "red", height: 10, width: 10, distance: 2 },
  { id: 6, color: "crimson", height: 7, width: 8, distance: 16 }
];

// Area of every object in array (separaely)

const calculateArea = myArr => {
  let newArr = [];
  myArr.map(el => {
    newArr.push(el.width * el.height);
  });
  return newArr;
};

// Total area of every object width/height attributes combined => //3680

// const calculateArea = myArr => {
//   // those have to be initiated with 0, else input is NaN
//   let width = 0,
//     height = 0,
//     area;
//   myArr.map(el => {
//     height = height + el.height;
//     width = width + el.width;
//   });
//   area = width * height;
//   return area;
// };

// Total area of whole array (6 objects, 5 attributes each) => //30

// const calculateArea = myArr => {
//   let width,
//     height = myArr.length,
//     area;
//   myArr.map(el => {
//     width = Object.keys(el).length;
//   });
//   return (area = width * height);
// };

console.log(calculateArea(demoArr));

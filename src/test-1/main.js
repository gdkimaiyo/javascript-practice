// PRACTICE

let str = "Swahili";
// let substr = "hili";
if (str.toLowerCase().indexOf("swa") !== -1) {
  console.log("Yes... it contains...");
} else {
  console.log("No... does not contain...");
}

// remove spaces at the end of a string
let strStr = " Welcome Home ";
console.log(strStr, strStr.length);
let new_strStr = strStr.trim();
console.log(new_strStr, new_strStr.length);

// Find list of duplicates
const values = [
  {id: 10, name: 'someName1'},
  {id: 10, name: 'someName1'},
  {id: 10, name: 'someName2'},
  {id: 11, name: 'someName3'},
  {id: 12, name: 'someName4'}
];

const lookup = values.reduce((a, e) => {
  a[e.id] = ++a[e.id] || 0;
  a[e.name] = ++a[e.name] || 0;
  return a;
}, {});

console.log(values.filter((e) => lookup[e.id] && lookup[e.name]));

const med = [
  {name: 'name1', position: 'left'},
  {name: 'name2', position: 'right'},
  {name: 'name1', position: 'left'},
  {name: 'name4', position: 'right'},
  {name: 'name5', position: 'left'},
  {name: 'name6', position: 'left1'}
]

const unique_arr = [];
med.reduce((acc, curr) => {
  if(acc.indexOf(curr.position) === -1) {
    acc.push(curr.position);
    unique_arr.push(curr);
  }
  return acc;
}, [])

console.log(unique_arr)

// console.log(Object.values(blacklist));

let arr = [12, 13, 1, 6, 72];
console.log(arr);

//sort array
arr.sort((a,b) => {return b-a;});
console.log(arr);

// let new_arr = arr.slice(0,2);
// console.log(new_arr);

// Find Max, min
let max = Math.max(...arr);
let min = Math.min(...arr);

console.log("Max: ", max);
console.log("Min: ", min);

// Map => Increase every element by 2
let map_arr = arr.map((elm, i) => {return (elm + 2);});
console.log(map_arr);

// END of PRACTICE

try {
  null.f()
} catch (e) {
  // continue;
  // console.log(e instanceof TypeError)  // true
  // console.log(e.message)               // "null has no properties"
  // console.log(e.name)                  // "TypeError"
  // console.log(e.fileName)              // "Scratchpad/1"
  // console.log(e.lineNumber)            // 2
  // console.log(e.columnNumber)          // 2
  // console.log(e.stack)                 // "@Scratchpad/2:2:3\n"
}

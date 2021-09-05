// PRACTICE

console.log("SEARCH A STRING FOR A 'STRING'");
let str = "Swahili";
console.log("String: ", str);
console.log("String to search: ", 'swa');

if (str.toLowerCase().indexOf("swa") !== -1) {
  console.log("Yes... it contains...");
} else {
  console.log("No... does not contain...");
}
console.log("\n\n");

// remove spaces at the end of a string
console.log("REMOVE SPACES AT START & END OF A STRING");
let strStr = " Welcome Home ";
console.log("Original String, Length\n", strStr, strStr.length);
let new_strStr = strStr.trim();
console.log("New String, Length\n", new_strStr, new_strStr.length);
console.log("\n\n");

// Find list of duplicates
console.log("FIND DUPLLICATES");
const values = [
  {id: 10, name: 'someName1'},
  {id: 10, name: 'someName2'},
  {id: 11, name: 'someName3'},
  {id: 10, name: 'someName1'},
  {id: 12, name: 'someName4'}
];

const lookup = values.reduce((a, e) => {
  a[e.id] = ++a[e.id] || 0;
  a[e.name] = ++a[e.name] || 0;
  return a;
}, {});
console.log("Original Object");
console.log(values);
console.log("Duplicates");
console.log(values.filter((e) => lookup[e.id] && lookup[e.name]));
console.log("\n\n");

// Find unique records in an object
console.log("FIND UNIQUE RECORDS");
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
console.log("Original list");
console.log(med);
console.log("Unique list");
console.log(unique_arr);
console.log("\n\n");


// SORT ARRAY IN ASC ORDER
console.log("SORT ARRAY IN ASC ORDER");
let arr = [12, 13, 1, 6, 72];
console.log("Original Array");
console.log(arr);

//sort array
arr.sort((a,b) => {return b-a;});
console.log("Sorted Array");
console.log(arr);
console.log("\n\n");

// Find Max, min
console.log("FIND MAX & MIN IN AN ARRAY");
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log("Array");
console.log(arr);
console.log("Max: ", max);
console.log("Min: ", min);
console.log("\n\n");

// Map => Increase every element by 2
console.log("INCREASE EVERY ITEM IN AN ARRAY BY 2 USING map()");
let map_arr = arr.map((elm, i) => {return (elm + 2);});
console.log("Original Array\n", arr);
console.log("New Array\n", map_arr);

// END of PRACTICE

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

// Algorithm Example: Test
// Find average score based on tests and their score

let testsA = ['test1a','test2','test1b','test1c','test3'];
let results = ['Wrong Answer', 'Ok', 'Ok', 'runtime', 'Ok'];

let myScore = findScore(testsA, results);
console.log(myScore);

function findScore(testArr, resArr) {
  let av_score = 0;

  let totalTests = 0;
  let totalPassed = 0;

  for (let i = 0; i < resArr.length; i++) {
    let passed = false;
    for (let j = 0; j < testArr.length; j++) {
      if (testArr[j].indexOf(i) !== -1) {
        if (resArr[j].toLowerCase() == "ok") {
          passed = true;
        } else {
          passed = false;
        }
      }
    }
    if (passed) {
      totalPassed += 1;
    }
    passed = false;
  }

  for (let i = 0; i < resArr.length; i++) {
    let newTest = false;
    for (let j = 0; j < testArr.length; j++) {
      if (testArr[j].indexOf(i) !== -1) {
        newTest = true;
      }
    }
    if (newTest) {
      totalTests += 1;
    }
  }

  console.log("Passed", totalPassed);
  console.log("Total Tests", totalTests);

  if (totalPassed == 0) {
    return av_score;
  }

  av_score = (totalPassed * 100) / totalTests;

  return Math.round(av_score);
}
// end Algorithm Example: Test

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

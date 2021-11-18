
let answers = new Map;
console.log(answers);

answers.set({
  age: 12,
  name: "jane doe",
});
console.log(answers);

const pets = ['cat', 'dog'];
console.log(pets.includes('at'));
let Pets = "cat";
console.log(Pets);
Pets = Pets.charAt(0).toUpperCase() + Pets.slice(1);
console.log(Pets);

const user = () => 'GIDEON';

const sayHello = (greet = 'Hello', to = user()) => {
  let greeting = `${greet} ${to}`;
  console.log(greeting);
}

sayHello('Good Morning,');

var str   = "my";
var stringArray = str.split(/(\s+)/);

console.log(stringArray); // ["my", " ", "car", " ", "is", " ", "red"]

// Get first word of a string
let sentence = "Speech facilitation and therapy";
let firstWord = sentence.split(" ")[0]
console.log(sentence);
console.log(firstWord);

// Get the starting time in a time slot with starting and ending time
let strArr = ["12:00 - 12:30", "13:00 - 13:30", "14:00 - 14:30"];
let map_strArr = strArr.map((elm, i) => {return (elm.split(" ")[0]);});
console.log("Original Array\n", strArr);
console.log("New Array\n", map_strArr);


function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) !== -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach xy');
// spinach already exists in the veggies collection.



console.log("ALGORITHM.\nFind least stops in a machine");
let my_str = ['712','246', '356', '312'];
let leastStops = 0;
let allTemp = [];
for (let i = 0; i < my_str.length; i++) {
  let temp = [];
  for (let j = 0; j < my_str[i].length; j++) {
    temp.push(parseInt(my_str[i][j], 10));
  }
  // sort array
  temp.sort((a,b) => {return a-b;});
  allTemp.push(temp);
  let max = Math.max(...temp);
  if (max > leastStops) {
    leastStops = max;
  }
  console.log(leastStops);
  // break;
}
console.log(allTemp);

// Algorithm Example: Test
// Find average score based on tests and their score

console.log("ALGORITHM.\nFind average score based on tests and their score");
let tests = ['test1a','test2','test1b','test1c','test3'];
let results = ['Wrong Answer', 'Ok', 'Ok', 'runtime', 'Ok'];
console.log("TESTS", tests);
console.log("RESULTS", results);

let myScore = findScore(tests, results);
console.log("Average Score: ", myScore);

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

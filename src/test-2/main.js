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

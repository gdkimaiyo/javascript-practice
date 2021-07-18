let sub: 'Please describe your current financial situation. We would specifically like to know about any Covid-19 related circumstances or any other financial constraints that have led you to apply for this scholarship.',

let languages = str.split(',');
console.log("Languages = ", languages);

var newstr = 'Engl/World! and Jeez';
var chars = newstr.split(/['/'',']+/);
console.log("CHARS = ", chars);


let amnt = 2500;
let scholarshipAmnt = 600;

let subsidyAmnt = amnt - scholarshipAmnt;

let subsidyPercentage = (subsidyAmnt / amnt) * 100;

console.log("Sponsor Percentage: " + subsidyPercentage + '%');

let chartdata = [];

let series1 = {
    name: "Autism",
    series: [
      {
        name: "Male",
        value: 12,
      },
      {
        name: "Female",
        value: 17,
      },
    ]
  }

let series2 = {
    name: "CP",
    series: [
      {
        name: "Male",
        value: 8,
      },
      {
        name: "Female",
        value: 12,
      },
    ]
  };


chartdata.push(series1);
chartdata.push(series2);

let multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

console.log(chartdata);
console.log(multi);

// FIlter, forEach, DOM Manipulation
let shops = [
  {
    name: 'shop1',
    country: 'ug'
  },
  {
    name: 'shop2',
    country: 'ke'
  },
  {
    name: 'shop3',
    country: 'tz'
  },
  {
    name: 'shop4',
    country: 'ke'
  },
  {
    name: 'shop5',
    country: 'ke'
  }
];


// Show all shops at first
let shopsIn = showAllShops(shops);
generateLi();

// Find shops in a country using filter
function showShops(event) {
  event.preventDefault();
  let btnId = event.currentTarget.id;
  if (btnId === 'all') {
    shopsIn = showAllShops(shops);

    // Add class list to clicked button
    document.getElementById(btnId).classList.toggle("active");
    console.log("___All Shops___\n", shopsIn);
  } else {
    shopsIn = getShops(shops, btnId);

    // Add class list to clicked button
    document.getElementById(btnId).classList.toggle("active");

    let countryName = (btnId === 'ke') ? "Kenya" : (btnId === 'ug' ? "Uganda" : "Tanzania");
    console.log("___Shops in", countryName, "___\n", shopsIn);
  }

  generateLi();
}

function generateLi() {
  let ul = document.getElementById('theList');

  if (ul.hasChildNodes()) {
    removeAllChildNodes(ul);
  }

  shopsIn.forEach((item, i) => {
    let liItem = document.createElement('li');
    liItem.textContent = item.name;

    ul.appendChild(liItem);
  });
}

// Add Active class on clicked button
let btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', (e) => {
    e.preventDefault();
    console.log(i);
  });
}

// HELPER Functions
function showAllShops(data) {
  return data.filter((element) => element.country);
}
function getShops(data, code) {
  return data.filter((element) => element.country === code);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

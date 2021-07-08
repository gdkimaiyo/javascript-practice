// Map, FIlter, Find
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


// Find shops in a country using filter
let shopsIn = [];

function showShops(event) {
  event.preventDefault();
  let btnId = event.currentTarget.id;
  shopsIn = getShops(shops, btnId);

  // Add class list to clicked button
  document.getElementById(btnId).classList.toggle("active");

  let countryName = (btnId === 'ke') ? "Kenya" : (btnId === 'ug' ? "Uganda" : "Tanzania");
  console.log("___Shops in", countryName, "___\n", shopsIn);

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
function getShops(data, code) {
  return data.filter((element) => element.country === code);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

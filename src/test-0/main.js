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

// Find shops in a country using filter
let btnsDiv = document.getElementById('filter'); // filter buttons div
let btn = btnsDiv.getElementsByClassName('filter-btn');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(e) {
    e.preventDefault();
    let btnId = event.currentTarget.id;

    // Add active class to clicked button
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";

    if (btnId === 'all') {
      shopsIn = showAllShops(shops);
      console.log("___All Shops___\n", shopsIn);
    } else {
      shopsIn = getShops(shops, btnId);

      let countryName = (btnId === 'ke') ? "Kenya" : (btnId === 'ug' ? "Uganda" : "Tanzania");
      console.log("___Shops in", countryName, "___\n", shopsIn);
    }

    generateLi();
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

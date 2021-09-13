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

// Find Duplicates
let all_list = [
  {
    name: "Jane Doe",
    houseNo: 123,
    email: "jane.doe@user.com ",
  },
  {
    name: "John Doe",
    houseNo: 122,
    email: "john.doe@user.com",
  },
  {
    name: "Alice",
    houseNo: 121,
    email: "alice@user.com",
  },
  {
    name: "Bob",
    houseNo: 120,
    email: "bob@user.com",
  },
  {
    name: "Jane Doe",
    houseNo: 123,
    email: "jane.doe@user.com",
  },
  {
    name: "Jane Doe",
    houseNo: 124,
    email: "jane.doe@user.com",
  },
]

findDuplicates(all_list);

// Original List => Duplicates Flagged: Same House no and email
console.log("___ Duplicates flagged in list ___\n", all_list);

let theCard = document.getElementById('theCard');
// Populate card content
all_list.forEach((item, i) => {
  let main = document.createElement('div');
  main.className = 'card-item';
  let sub_main = document.createElement('div');
  sub_main.className = 'card-content';
  let avatar = document.createElement('p');
  let i_elm = document.createElement('i');
  let name = document.createElement('div');
  let email = document.createElement('div');
  let houseNo = document.createElement('div');
  let isDuplicate = document.createElement('div');

  avatar.className = 'avatar';
  i_elm.className = 'fas fa-user-circle fa-3x';
  avatar.appendChild(i_elm);

  name.className = 'text-muted text-muted-bold'
  email.className = houseNo.className = isDuplicate.className = 'text-muted';
  name.textContent = item.name;
  email.textContent = item.email;
  houseNo.textContent = "House No: " + item.houseNo;
  isDuplicate.textContent = (item.duplicate) ? "isDuplicate: True" : "isDuplicate: False";

  sub_main.appendChild(avatar);
  sub_main.appendChild(name);
  sub_main.appendChild(email);
  sub_main.appendChild(houseNo);
  sub_main.appendChild(isDuplicate);

  main.appendChild(sub_main)
  theCard.appendChild(main);
});

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

function findDuplicates(data) {
  const lookup = data.reduce((a, e) => {
    a[e.email.trim()] = ++a[e.email.trim()] || 0;
    a[e.houseNo] = ++a[e.houseNo] || 0;
    return a;
  }, {});

  data.forEach((element, i) => {
    if (lookup[element.email.trim()] && lookup[element.houseNo]) {
      element['duplicate'] = true;
    }
  });
  // Return all list with duplicates flagged
  // return data;

  // Return duplicates list
  // return data.filter((element) => lookup[element.email] && lookup[element.houseNo]);
}

// Chucknorries API
const URL = 'https://api.chucknorris.io/jokes/random?category=dev';

getRamdomJoke();

async function getRamdomJoke() {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    updateJoke(response.data.value, response.data.categories[0]);
  } catch (error) {
    console.error(error);
  }
}

// next joke button
let nxtBtn = document.getElementById('next-btn');
nxtBtn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log("Next Button Clicked...");
  let category = document.getElementById('category-name');
  let joke = document.getElementById('joke');
  if (category.childNodes.length > 0) {
    while(category.firstChild){
      category.removeChild(category.firstChild);
    }
    while(joke.firstChild){
      joke.removeChild(joke.firstChild);
    }
  }
  getRamdomJoke();
});

function updateJoke(joke, category) {
  let categoryElm = document.getElementById('category-name');
  let jokeElm = document.getElementById('joke');
  categoryElm.appendChild(document.createTextNode(category));
  jokeElm.appendChild(document.createTextNode(joke));
}

// end of Chucknorries API

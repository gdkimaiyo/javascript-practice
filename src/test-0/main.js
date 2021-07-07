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


// Find shops in KE using filter
let shopsInKe = getKeShops(shops, 'ke');

console.log("___Shops in Kenya___\n", shopsInKe);

let ul = document.getElementById('theList');
shopsInKe.forEach((item, i) => {
  let liItem = document.createElement('li');
  liItem.textContent = item.name;

  ul.appendChild(liItem);
});

let btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', (e) => {
    e.preventDefault();
    console.log(i);
  });
}

// HELPER Functions
function getKeShops(data, country) {
  return data.filter((element) => element.country === country);
}

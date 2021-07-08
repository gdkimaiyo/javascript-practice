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

// Duplicates
let all_list = [
  {
    name: "Jane Doe",
    houseNo: 123,
    email: "jane.doe@user.com",
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
]

// Original list
console.log("___ Original List ___\n", all_list);
// Duplicates list
let duplicates = findDuplicates(all_list);
console.log("___ Duplicates List ___\n", duplicates);
// Duplicate emails
let duplicateEmails = [];
duplicates.forEach((item, i) => {
  duplicateEmails.push(item.email);
});
console.log("___ Duplicate emails ___\n", duplicateEmails);

// Flag record as duplicate
all_list.forEach((item, i) => {
  for (let email of duplicateEmails) {
    if (item.email === email) {
      item['duplicate'] = true;
    }
  }
});

// Original list
console.log("___ Duplicates flagged ___\n", all_list);

let tbody = document.getElementById('tbody');
// Populate tbody with content
all_list.forEach((item, i) => {
  let tr = document.createElement('tr');
  let name = document.createElement('td');
  let email = document.createElement('td');
  let houseNo = document.createElement('td');
  let duplicate = document.createElement('td');

  name.textContent = item.name;
  email.textContent = item.email;
  houseNo.textContent = item.houseNo;
  duplicate.textContent = (item.duplicate) ? "True" : "False";

  tr.appendChild(name);
  tr.appendChild(email);
  tr.appendChild(houseNo);
  tr.appendChild(duplicate);
  tbody.appendChild(tr);
});

// HELPER Functions
function findDuplicates(data) {
  const lookup = data.reduce((a, e) => {
    a[e.email] = ++a[e.email] || 0;
    a[e.houseNo] = ++a[e.houseNo] || 0;
    return a;
  }, {});

  return data.filter((element) => lookup[element.email] && lookup[element.houseNo]);
}

const email = document.querySelector("#email-form");
const name = document.querySelector("#new-user");
const addItem = document.querySelector("#add-item");
const items = document.querySelector("#items");

// Handle Email Signup and save to firebase
email.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value) {
    const item = {
      name: name.value,
    };
    db.collection("emails")
      .add(item)
      .then((res) => {
        name.value = "";
      });
  } else {
    console.error;
  }
});

// Handle new Item form
items.addEventListener("submit", (e) => {
  e.preventDefault();

  if (addItem.value) {
    const item = {
      item: addItem.value,
    };
    db.collection("items") // Select the collection
      .add(item) // Firebase Method .add and select item const
      .then((res) => {
        // Once promice finished, reset inputs
        addItem.value = "";
      });
  } else {
    console.error;
  }
});

// Handle Search
const searchBar = document.querySelector("#search");
searchBar.addEventListener("keyup", function (e) {
  //
  let searchTerm = e.target.value.toLowerCase();

  // Look for Item
  let items = [...document.querySelectorAll("div.searchable")];

  items.forEach(function (item) {
    console.log(typeof item.textContent);
    console.log(typeof searchTerm);

    if (item.textContent == searchTerm) {
      console.log(item.textContent);
    } else {
    }
  });
});

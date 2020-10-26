// Handle Email Signup and save to firebase
const email = document.querySelector("#email-form");
const name = document.querySelector("#new-user");
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

// Handle New Item
const items = document.querySelector("#item-form");
const addItem = document.querySelector("#add-item");
items.addEventListener("submit", (e) => {
  e.preventDefault();

  const price = parseInt(input.value);

  if (addItem.value) {
    const item = {
      url: addItem.value,
      prices: price,
      date: new Date().toString(),
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
  let searchTerm = e.target.value.toLowerCase();

  // Look for Item
  let items = [...document.querySelectorAll("div.searchable")];

  items.forEach(function (item) {
    const title = item.textContent;

    if (item.textContent.toLowerCase().indexOf(searchTerm) != -1) {
      item.parentNode.parentNode.parentNode.parentNode.style.display = "block";
    } else {
      item.parentNode.parentNode.parentNode.parentNode.style.display = "none";
    }
  });
});

// Retreive items
db.collection("items")
  .get()
  .then((res) => {
    var data = [];
    res.docs.forEach((doc) => {
      console.log(doc.data());
    });
  });

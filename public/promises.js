const select = document.getElementById("github");

// Fetch Github Api
const fetchData = async () => {
  var response = await fetch("https://api.github.com/users/simoncarriere");
  var user = await response.json();
  return user;
};

fetchData()
  .then((data) => generateImage(data.avatar_url))
  .catch(function (err) {
    console.log(err);
  });

function generateImage(data) {
  const html = `
    <img src='${data}' class="h-8 w-8 rounded-full mr-5">
    `;
  select.innerHTML = html;
}

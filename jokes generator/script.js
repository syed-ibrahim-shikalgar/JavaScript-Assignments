let btn = document.getElementById("jokeBtn");
let joke = document.getElementById("joke");

btn.addEventListener("click", () => {
  const jokes = fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      joke.innerText = data.value;
    })
    .catch();
});

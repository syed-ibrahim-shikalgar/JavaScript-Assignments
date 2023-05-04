let btn = document.getElementById("jokeBtn");
let joke = document.getElementById("joke");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ca39792e98mshd0da74ef2e14067p1d6974jsn306721ce7f51",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

const jokesAPI = () => {
  fetch("https://dad-jokes.p.rapidapi.com/random/joke", options)
    .then((response) => response.json())
    .then((response) => {
      joke.innerText = response.body[0].setup;
    })
    .catch((err) => console.error(err));
};

btn.addEventListener("click", jokesAPI);

const buttonEL = document.getElementById("button");
const jokeEL = document.getElementById("joke");

const ApiKey = "W7fmkT6d0FWBvCPinoehig==DHl0hjdPiUGZWviz";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": ApiKey,
  },

};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
  try {
    jokeEL.innerText = "updating wait bruh ...";
    buttonEL.disabled = true;
    buttonEL.innerText = "loading..."

  const response = await fetch(apiURL, options);
  const data = await response.json();
  jokeEL.innerText = data[0].joke;

  buttonEL.disabled = false;
  buttonEL.innerText = "tell me a joke";


  } catch (e) {

    jokeEL.innerText = "An error happened, try again Later";
    buttonEL.disabled = false;
    buttonEL.innerText = "tell me a joke";
  }



// console.log(data[0].joke);
}




buttonEL.addEventListener("click", getJoke)

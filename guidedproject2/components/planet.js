//const planets = await fetch(` https://swapi2.azurewebsites.net/api/films/${id}/planets`);
//const characters = await fetch(` https://swapi2.azurewebsites.net/api/films/${id}/characters`);

const baseUrl = `https://swapi2.azurewebsites.net/api`;

// Runs on page load
addEventListener('DOMContentLoaded', () => {
  nameH1 = document.querySelector('h1#name');
  climateSpan = document.querySelector('span#climate');
  terrainSpan = document.querySelector('span#terrain');
  gravitySpan = document.querySelector('span#gravity');
  diameterSpan = document.querySelector('span#diameter');
  populationSpan = document.querySelector('span#population');
  rotationperiodSpan = document.querySelector('span#rotation_period');
  surfacewaterSpan = document.querySelector('span#surface_water');
  charactersUl = document.querySelector('#characters>ul');
  filmsUl = document.querySelector('#films>ul');
  const sp = new URLSearchParams(window.location.search)
  const id = sp.get('id')
  getPlanet(id)
});

async function getPlanet(id) {
  let planet;
  try {
    planet = await fetchPlanet(id)
    planet.characters = await fetchCharacters(planet)
    planet.films = await fetchFilms(planet)
  }
  catch (ex) {
    console.error(`Error reading planets ${id} data.`, ex.message);
  }
  renderPlanets(planet);

}
async function fetchPlanet(id) {
  let planetUrl = `${baseUrl}/planets/${id}`;
  return await fetch(planetUrl)
    .then(res => res.json())
}

async function fetchCharacters(planet) {
  const url = `${baseUrl}/planets/${planet?.id}/characters`;
  const characters = await fetch(url)
    .then(res => res.json())
  return characters;
}

async function fetchFilms(planet) {
  const url = `${baseUrl}/planets/${planet?.id}/films`;
  const films = await fetch(url)
    .then(res => res.json())
  return films;
}

const renderPlanets = planet => {
  document.title = `SWAPI - ${planet?.name}`;  // Just to make the browser tab say their name
  nameH1.textContent = planet?.name;
  climateSpan.textContent = planet?.climate;
  terrainSpan.textContent = planet?.terrain;
  gravitySpan.textContent = planet?.gravity;
  diameterSpan.textContent = planet?.diameter;
  populationSpan.textContent = planet?.population;
  rotationperiodSpan.textContent = planet?.rotation_period;
  surfacewaterSpan.textContent = planet?.surface_water;
  const charactersLis = planet?.characters?.map(character => `<li><a href="/character.html?id=${character.id}">${character.name}</li>`)
  charactersUl.innerHTML = charactersLis.join("");
  const filmsLis = planet?.films?.map(film => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`)
  filmsUl.innerHTML = filmsLis.join("");
}

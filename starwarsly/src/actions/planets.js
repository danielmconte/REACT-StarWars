import axios from "axios";
import { LOAD_PLANET } from "./types";

// Makes a call to Star Wars API, identifying planet with passed id
// Destructures response data
// Looks for resident and film matches in response via regex (so that they will be listed on planet show page )
// Creates a planet object with destructured response data
// Dispatches the action for our reducer passing the planet to the gotPlanet fuction...
// which will return the necessary format for the reducer, with the specific planet object 

function getPlanetFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let {
      name,
      population,
      climate,
      residents,
      films
    } = res.data;

    residents = residents.map(url => url.match(/\d+/)[0]);
    films = films.map(url => url.match(/\d+/)[0]);

    const planet = { id, name, population, climate, residents, films };
    dispatch(gotPlanet(planet));
  };
}


function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}


export { getPlanetFromAPI }
import axios from 'axios';
import { LOAD_FILM } from "./types";

// Makes a call to Star Wars API, identifying film with passed id
// Destructures response data
// Looks for person and planet matches in response via regex (so that they will be listed on film show page )
// Creates a film object with destructured response data
// Dispatches the action for our reducer passing the film to the gotFilm fuction...
// which will return the necessary format for the reducer, with the specific film object 


function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;

    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}


function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }
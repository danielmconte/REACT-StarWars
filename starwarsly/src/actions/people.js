import axios from "axios";
import { LOAD_PERSON } from "./types";

// Makes a call to Star Wars API, identifying person with passed id
// Destructures response data
// Looks for planet and film matches in response via regex (so that they will be listed on person show page )
// Creates a person object with destructured response data
// Dispatches the action for our reducer passing the person to the gotPerson fuction...
// which will return the necessary format for the reducer, with the specific person object 

function getPersonFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let {
      name,
      gender,
      birth_year: birthYear,
      homeworld,
      films
    } = res.data;

    films = films.map(url => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}


function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}


export { getPersonFromAPI }
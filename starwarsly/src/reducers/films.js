import { LOAD_FILM, RESET_ALL } from "../actions/types";


//Our film reducer with two cases for action
// Either reset, returning initial state back to an empty object
// Or filling the object with established state (list of films already visited)...
// and adding a new film's key and value to the object 
// (uses spread operator to keep reducer pure) 

const INITIAL_STATE = {};


function films(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_FILM:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default films;
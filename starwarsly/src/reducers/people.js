import { LOAD_PERSON, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

//Our people reducer with two cases for action
// Either reset, returning initial state back to an empty object
// Or filling the object with established state (list of people already discovered)...
// and adding a new persons's key and value to the object 
// (uses spread operator to keep reducer pure) 

function people(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PERSON:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default people;
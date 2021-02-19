import { LOAD_PLANET, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

//Our planet reducer with two cases for action
// Either reset, returning initial state back to an empty object
// Or filling the object with established state (list of planets already discovered)...
// and adding a new planet's key and value to the object 
// (uses spread operator to keep reducer pure) 

function planets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PLANET:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default planets;
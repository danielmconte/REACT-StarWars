import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";

// Bundles the three reducers together for exporting to store.js, 
// which will take these three option and plugs them into the foundational reducer 

export default combineReducers({
  films,
  planets,
  people,
});
import { RESET_ALL } from "./types";

// Give the correct format for dispath to clear all past visits to film, person, or planet

function resetAll() {
  return { type: RESET_ALL }
}


export { resetAll }
import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { resetAll } from "./actions/reset";

// The homepage: uses useSelector to check the store and see if anything is at films[1]
// If there is nothing it will suggest starting with New Hope and a button the links to New Hope show page
// If there is something it will suggest refreshing with a button that will dispatch the action resetAll to clear the store 

function HomePage() {
  const loaded = useSelector(st => st.films[1] !== undefined);
  const dispatch = useDispatch();

  function reset() {
    dispatch(resetAll());
  }
  
  return (
    <>
      {loaded ? (
        <button
          className="btn btn-danger btn-block btn-lg"
          onClick={reset}
        >
          Reset To Fresh Exploration
        </button>
      ) : (
        <Link to="/films/1" className="btn btn-primary btn-block btn-lg">
          Start with &ldquo;A New Hope&rdquo;
        </Link>
      )}
      <img
        className="mt-3 mb-5 w-100"
        alt="StarWars.ly"
        src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
      />
    </>
  );
}

export default HomePage;

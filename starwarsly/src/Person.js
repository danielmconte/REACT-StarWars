import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getPersonFromAPI } from "./actions/people";
import Sublist from "./Sublist";

// useParms gets the id from the route url, uses that id to get the person from store with useSelector
// Also useSelector gets planets and films from the store, and useDispatch lets us dispatch actions from store
// useEffect will run if there is a change to id, dispatch, or it can't find a person 
// (it will try to make API call from people.js again and display 'loading, is missing)
// There are two functions for homeworld and films that will make an object with id, url used for link, and ternary operator...
// that gives name or unknown depending if it is in the store
// Renders info on specific person and calls Sublist component on film and homeworld(which use their respective functions). 

function Person() {
  
  const dispatch = useDispatch();
  const {id} = useParams();
  const person = useSelector(st => st.people[id]);
  const planetState = useSelector(st => st.planets);
  const filmState = useSelector(st => st.films);
  const missing = !person;

  useEffect(function() {
    if (missing) {
      dispatch(getPersonFromAPI(id));
    }
  }, [id, missing, dispatch]);

  if (missing) return "loading...";

  const hw = person.homeworld;
  const homeworld = {
    id: hw,
    url: `/planets/${hw}`,
    display: planetState[hw] ? planetState[hw].name : "Unknown"
  };

  const films = person.films.map(fid => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="my-3">
        {person.name}
        <small className="text-muted float-right">{person.id}</small>
      </h1>

      <p><b>Gender: </b>{person.gender}</p>
      <p><b>Birth Year: </b>{person.birthYear}</p>
      <p>
        <b>Homeworld: </b>
        <Link to={homeworld.url}>{homeworld.display}</Link>
      </p>

      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Person;


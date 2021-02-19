import React from 'react';
import { Link } from "react-router-dom";

// Called from Film.js, Person.js, and Planet.js to show info (and provide link) associated with show page it was called from...
// For example the Film show page will have the people and planets associated with that film.

function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;
import React from 'react';
import { Link } from "react-router-dom";

// Catchall to makes lists for planets, films or people viewed.
// An array of the items viewed for the type passed in along with the title
// A ternary operator checks if there is anything in the list and then...
// Renders the list of items with links to the show page for individual items
// Or if nothing is in the array, it renders a message telling you so. 

function ItemList({items, title}) {
  return (
    <>
      <h1 className="my-3">{title}</h1>
      {items.length !== 0
        ? (
          <ul style={{ fontSize: "120%" }}>
            {items.map(item =>
              <li key={item.id}>
                <Link to={item.url}>
                  {item.name}{" "}
                  <small className="text-muted">{item.id}</small>
                </Link>
              </li>
            )}
          </ul>
        )
        : <p>You haven't explored any items of this type yet.</p>
      }
    </>
  );
}


export default ItemList;

import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

// useSelector can access store to find film object which uses its values to map out films in the store and their url in to an object
// Passes this object into the Itemlist component

function FilmList() {
  const items = useSelector(st => Object.values(st.films).map(
    f => ({...f, url: `/films/${f.id}`})
  ));
  return <ItemList title="Films" items={items} />;
}

export default FilmList;

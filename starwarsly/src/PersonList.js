import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

// useSelector can access store to find people object and uses its values to map out people in the store and their url in to an object
// Passes this object into the Itemlist component

function PersonList() {
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;
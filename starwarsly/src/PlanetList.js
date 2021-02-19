import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'

// useSelector can access store to find planet object and uses its values to map out planets in the store and their url in to an object
// Passes this object into the Itemlist component

function PlanetList() {
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;
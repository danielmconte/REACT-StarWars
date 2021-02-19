- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?

  In the case is used to search the Star Wars API response for matching patterns. In most cases (if not all) it is used to
  search for a pattern without knowing the specifics.  So '....' could be a line with at least four characters, where each '.' stands for a single character. 
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?

Combining PersistGate wrapper in index.js with the persistReducer in store.js will save the store to local storage each time there is a change.
  
- What does `combineReducers` do? Why are we using it? 
  combineReducers used in root.js, bundles the different reducers into a single reducer function in store.js (passed to createStore in store.js)

- How does the "Reset to Fresh Exploration" feature work?
  Checks to see if there is anything already in the film object of the store, and if there is will dispatch the RESET_ALL action, clearing the store. 


- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?

  The Person, Film, and Planet all need to be formatted in a very similar way, so for example FilmList.js will get the particular object
  and pass it as an items object to ItemList which can format the data as it would data from PersonList or PlanetList, making the process dynamic, and more concise. This is an example of what React is really good at.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?

  When the store is empty the only start path offered is to A New Hope.  So we only need to check if that one film is present, because if it's not there nothing else is.  Checking for the initial film is loaded is a quick, less taxing way then selecting all the films and checking over the whole list to see if there is match. 
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?

  I like the interactive elements. Essentially just adding to a store becomes a bit of a game.  It is engaging.  As far as good design goes, I think having all three reducers combined and fed to the one reducer function in store is well done.  As is the use of generic ItemList and Sublist components, which any of the three categories can be passed into.  
  
- Which Star Wars character would make the best React developer, and why?
- At first I would say it would have to be one of the Jedi, because it takes careful consideration of component design like using the force.  But on further consideration, React is also good at reproducing components over and over again--like the Empire throughout the galaxy, so it would probably be a character on the Dark Side.  So I'd say either Darth Vader or the Emperor would be best at React.   

###How this app is structured

-The top-most app is index.js, which passes in the Redux store via Provider and uses PersisteGate for persistent storage, and wraps the component App

-App.js establishes there will be client-side routes by wrapping the Navbar and Routes in BrowserRouter

-Navbar component is simply a Navbar linking to PersonList, PlanetList, and FilmList and the Homepage

-Homepage checked what's in the store, and if it finds anything has a button suggesting user start again clearing all store data, or is nothing is in store a button suggesting the user start with the film A New Hope

-Routes.js establishes possible routes: A homepage and two pages for each of the three types: a List page and a Show page

-Each List page (FilmList, PlanetList, Personlist) will access the store to see which have been discovered (ie viewed and added to store) for that particular category and calls ItemList component

-ItemList is a catchall for the three List pages formatting the particular items object passed and making a title and names of items already discovered (passed from List page) and unknown for those undiscovered and links using the urls passed
 
-Clicking a link will take you to a Film, Person, or Planet showpage, which find the particular one by id format the name as an h1 give additional information and call two Sublist components

-The Sublist components shows the associations in the other two categories (for example if Film was the showpage the sublists wound be people and planets), and shows unknown if unviewed by user and name if already viewed.

-store.js creates the redux store, connects to the persistent storage, creates the general framework of reducer function that specific reducers will be passed into  

-The reducers folder contains the reducers for each category (Film, People, Planet), with initial state and two action types RESET_ALL and LOAD_FILM (or person, or planet) emptying the store or adding an item.  These are bundled together in root.js and sent for use in store.js

-The action folder contains type.js which has the string names of all actions, the other four files serve as a ways to correctly format the action for the reducer function.  While threefilm.js, people.js, and planet.js in addition to formatting, also make the call to the Star Wars API 

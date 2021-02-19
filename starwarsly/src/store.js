import  { composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import root from "./reducers/root";
import { createStore, applyMiddleware } from "redux";

// This creates the Redux store, passing the pure function persistedReducer
// With object persistConfig as the initial state, and root as the action
// In additon to creating the store the function store also adds DevTools...
// and thunk middleware to help with the the async calls to the Star Wars API
// All is passed nicely into an exported function persistedStore.
// Note: root is the action, imports from root.js, where three potential actions are bundled as one 

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, root);


export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);


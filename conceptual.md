### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
  Redux combines all your state into a store.  On larger apps it's easier to have one central store (like a database), rather than
  establishing a bunch of separate states.

- What are three features of the Redux developer tool in Chrome?
  

- What is a store?
  It keeps all the state in a central location (store)

- What is a reducer?
  A function with an initial state and an action.  Each time an action is taken it will update the initial state.

- What is an action?
    An action is passed as the second argument to the reducer.  The action is dispatched.  It will update the initial state passed as the first argument in the reducer. 
- What is an action creator?

- How does data flow in a React/Redux application?

- What is the purpose of the `<Provider>` component?
    In the top-level component the store is passed to the Provider so every child component will have access.
- What is the purpose of the `useSelector` hook? What does it return?
  useSelector gives you access to the store, so it will return data from objects in the store 

- Describe the `useDispatch` hook. What do you use it for?
  useDispatch is used to dispatch an action.  Needed to be used in conjunction with reducer functions to update state.

- What is redux-thunk and why would you use it?
  A middleward that helps with async operations.  I would used it for external API calls.

- What are propTypes?

- Describe the `useCallback` hook.  What is it used for?
- Used to wrap functions to prevent infinite loops as the component rerenders.

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
     Uses the pattern state, dispatch.  Can be used with useContext to create a similar behavior to Redux.  With useContext serving as the state across components, and useReducer the reducer function that you find in Redux.  Since useContext is best used for specific data you need across components...I think I would use Redux for larger stores of data (although I could be convinced otherwise!).   
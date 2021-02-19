### Conceptual Exercise

Answer the following questions below:

1. What is Redux? Why might you use it?
 
-Redux combines all your state into a store.  On larger apps it's easier to have one central store (like a database), rather than
  establishing a bunch of separate states.

2. What are three features of the Redux developer tool in Chrome?

  -Tracing actions, skipping actions and custom dispatches

3. What is a store?

  -It keeps all the state in a central location (store)

4. What is a reducer?

  -A function with an initial state and an action.  Each time an action is taken it will update the initial state.

5. What is an action?

    -An action is passed as the second argument to the reducer.  The action is dispatched.  It will update the initial state passed as the first argument in the reducer. 

6. What is an action creator?

 -This is a function that returns an action (object)

7. How does data flow in a React/Redux application?

  -It flows to the store, then from the store.  Back and forth.  

8.What is the purpose of the `<Provider>` component?

   -In the top-level component the store is passed to the Provider so every child component will have access.
   
9. What is the purpose of the `useSelector` hook? What does it return?
1
  -useSelector gives you access to the store, so it will return data from objects in the store 

10. Describe the `useDispatch` hook. What do you use it for?

  -useDispatch is used to dispatch an action.  Needed to be used in conjunction with reducer functions to update state.

11. What is redux-thunk and why would you use it?

  -A middleward that helps with async operations.  I would used it for external API calls.

12. What are propTypes?

-propTypes is a library to check the type of props.  Like Typescript tries to make up for the fact that Javascript will try to operate even if you pass the wrong type (for example, a string instead of a number) to a function, so propTypes checks to see it the correct type was passed. 

13. Describe the `useCallback` hook.  What is it used for?
  -Used to wrap functions to prevent infinite loops as the component rerenders.

14. Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?

     -Uses the pattern state, dispatch.  Can be used with useContext to create a similar behavior to Redux.  With useContext serving as the state across components, and useReducer the reducer function that you find in Redux.  Since useContext is best used for specific data you need across components...I think I would use Redux for larger stores of data (although I could be convinced otherwise!).   

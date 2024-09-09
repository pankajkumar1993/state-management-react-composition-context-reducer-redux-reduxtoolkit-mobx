## Using context api with useReducer()

1. Create the User Context
2. User Management Components: Add or Update User Form, User List with Search, Sort, and Status Toggle
3. Integrate in the Main Application
4. Styling and Further Enhancements
5. Testing the Application

---

## Using context api with useState()

4. Create the User Context: create a context to manage the state of users using useState.
5. User Management Components: User Form Component, User List Component
6. Main Application: Integrate the context and components in your main application.
7. Styling and Further Enhancements
8. Testing the Application

State Management: Instead of using a reducer, individual states are managed with useState.
CRUD Operations: The UserContext provides functions for adding, updating, deleting, and toggling status of users, as well as managing search and sort criteria.
Custom Hook: The useUserContext hook simplifies access to the context.
This approach gives you a straightforward and stateful way to manage a user CRUD system using the Context API without the complexity of useReducer.

---

## User CRUD System with Plain Redux

1. Install Redux and React-Redux
   `npm install redux react-redux`

2. Create Actions: Define action types and action creators.
3. Create the Reducer
4. Create the Redux Store
5. Integrate Redux with React
6. User Management Components: User Form Component, User List Component
7. Main Application
   Integrate everything in your main application.

---

## Refactor Using Redux Toolkit

1. Set Up Redux Toolkit
   `npm install @reduxjs/toolkit`

2. Create a Slice
3. Create the Store
4. Refactor Components

Summary
Plain Redux: You manually define action types, action creators, and the reducer.
Redux Toolkit: You simplify the process using createSlice, which automatically generates actions and the reducer.
By refactoring to Redux Toolkit, your code becomes more concise and easier to manage, reducing boilerplate and improving readability.

---

## CRUD system using only useState

1. Create the Main Component
2. Create the Form Component
3. Create the List Component
4. Component Composition: In this approach, the App component manages the state using useState and composes the UserForm and UserList components. These components receive the necessary props to perform their respective tasks, like adding, updating, deleting, searching, and sorting users.

### Benefits of This Approach

1. Simplicity: All state is managed locally using useState.
2. Separation of Concerns: Each component has a clear responsibility—UserForm handles input, and UserList handles display and actions.
3. Reusability: The components can be reused with different data or in different contexts if needed.

This setup provides a lightweight and easily understandable implementation without the complexity of external state management tools like Redux or Context API.

---

## CRUD system using only useReducer

Certainly! To build a user CRUD system using useReducer without Context API or Redux, we'll use useReducer to manage state in a centralized manner within a single component. This approach is suitable for scenarios where state management is complex but contained within a single component.

1. Set Up the Reducer
   First, define the reducer function and initial state. This reducer will handle actions for adding, updating, deleting, and toggling the user status.
2. User Form Component
3. User List Component
4. Compose the Main Application

Reducer and Initial State: Defined in reducer.js to handle all actions and state updates.
User Form Component: Handles user input and submits data to the reducer.
User List Component: Displays the list of users and allows for filtering, sorting, and performing actions like delete and toggle status.
Main Application Component: Uses useReducer to manage the state and provides necessary data and functions to child components.
This setup provides a clean, maintainable way to manage state using useReducer without the need for additional state management libraries.

---

## CRUD using Mobx

1. Set Up MobX and MobX React
   `npm install mobx mobx-react-lite`
2. Create the MobX Store
3. Create the React Components
4. Compose the Main Application

### Summary

1. MobX Store: Manages all state and actions for users.
2. UserForm Component: Handles user input and submission to the store.
3. UserList Component: Displays and interacts with the list of users.
4. Main Application Component: Combines form and list components to form the complete application.
   This setup uses MobX for state management, allowing you to handle state in a scalable and maintainable way while keeping your components focused on rendering and user interaction.

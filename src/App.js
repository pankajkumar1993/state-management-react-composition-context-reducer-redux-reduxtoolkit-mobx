import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersCrudUsingContextReducer from "./views/using-context-reducer";
import UsersCrudUsingRedux from "./views/using-redux";
import UsersCrudUsingReduxToolKit from "./views/using-redux-toolkit";
import UserState from "./views/using-state";
import UsersCrudUsingReducer from "./views/using-reducer";
import UsersCrudUsingMobx from "./views/using-mobx";
import UsersCrudUsingContextState from "./views/using-context-state";
import RootLayout from "./layouts/Rootlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <UserState /> },
      { path: "/context-api-state", element: <UsersCrudUsingContextState /> },
      { path: "/reducer", element: <UsersCrudUsingReducer /> },
      {
        path: "/context-api-reducer",
        element: <UsersCrudUsingContextReducer />,
      },
      { path: "/redux", element: <UsersCrudUsingRedux /> },
      { path: "/redux-toolkit", element: <UsersCrudUsingReduxToolKit /> },
      { path: "/mobx", element: <UsersCrudUsingMobx /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

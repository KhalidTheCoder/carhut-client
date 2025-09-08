import App from "../App";
import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home";
import SearchResults from "../Pages/SearchResults";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      //   {
      //     path: "/login",
      //     element: <Login></Login>,
      //   },
      //   {
      //     path: "/register",
      //     element: <Register></Register>,
      //   },
    ],
  },

  //   { path: "*", element: <Error /> },
]);

export default Routes;

import { createHashRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Occupation } from "./Occupation";
import Main from "./Main";
import { About } from "./About";
import Education from "./Education";
import Home from "./Home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/sok-yrke",
        element: <Main></Main>,
      },
      {
        path: "/yrke/:id",
        element: <Occupation></Occupation>,
      },
      {
        path: "/om",
        element: <About></About>,
      },
      {
        path: "/sok-utbildning",
        element: <Education></Education>,
      },
    ],
  },
]);

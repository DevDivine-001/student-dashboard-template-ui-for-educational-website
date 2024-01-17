import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout";
import LandingPages from "../Pages/Home/LandingPages";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    children: [
      {
        element: <LandingPages />,
        path: "",
      },
    ],
  },
]);

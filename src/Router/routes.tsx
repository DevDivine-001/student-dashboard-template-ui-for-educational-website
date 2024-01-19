import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout";
import LandingPages from "../Pages/Home/LandingPages";
import Courses from "../Pages/sceen/Courses";
import Blog from "../Pages/sceen/Blog";
import Profile from "../Pages/sceen/Profile";
import HelpCenter from "../Pages/sceen/HelpCenter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPages />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/profile",
        index: true,
        element: <Profile />,
      },
      {
        path: "/helpcenter",
        index: true,
        element: <HelpCenter />,
      },
    ],
  },
]);

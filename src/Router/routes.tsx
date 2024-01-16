import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
  },
]);
